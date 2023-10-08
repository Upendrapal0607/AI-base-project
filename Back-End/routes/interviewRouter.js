const express = require("express")
require("dotenv").config()
const interviewRouter = express.Router()
const OpenAI = require("openai");
// const authMiddleware = require("../middleware/authMiddleware");
const analyzeUserPreferences = require("../utils/analyzeUserPreferances copy");

const openai = new OpenAI({
    apiKey: process.env.secreateKEY
})
// console.log({openai:process.env.secreateKEY})

interviewRouter.post("/generate-interview-questions", async (req, res) => {

    try {
        const { type, customPrompt, topics, userPreferences, experienceLevel, questionStyle } = req.body;
        console.log({ type, customPrompt, topics, userPreferences, experienceLevel, questionStyle })
        const prompts = {
            MERN: "Generate MERN interview questions",
            Java: "Generate Java interview questions",
            Node: "Generate Node backend interview questions",
            Javascript: "Generate Javascript interview questions",
            HTML: "Generate HTML interview questions",
            CSS: "Generate CSS interview questions"
        };


        const practicalScenarios = {
            MERN: [
                "Build a simple MERN Stack CRUD application.",
                "Create a MERN Stack blog website with user authentication.",
                // Add more MERN scenarios as needed
            ],
            Java: [
                "Create a Java program that calculates the factorial of a number.",
                "Develop a Java-based e-commerce shopping cart system.",
                // Add more Java scenarios as needed
            ],
            Node: [
                "Develop a Node.js server that handles user registration and login.",
                "Build a real-time chat application using Node.js and WebSocket.",
                // Add more Node.js scenarios as needed
            ],
            Javascript: [
                "Implement a JavaScript function that finds the largest element in an array.",
                "Create a JavaScript-based quiz application.",
                // Add more JavaScript scenarios as needed
            ],
            Python: [
                "Write a Python script that automates file renaming in a folder.",
                "Develop a Python-based weather forecasting application.",
                // Add more Python scenarios as needed
            ],
        };

        let prompt = customPrompt || prompts[type];
// console.log({analyzeUserPreferences});
        if (userPreferences) {
            const analyzedPreferance = analyzeUserPreferences(userPreferences);
            if (analyzedPreferance) {
                prompt += ` based on your preferences: ${analyzedPreferance}`;
            }

        }


        if (topics) {
            // const topicsArray = topics.split(',');
            // if (topicsArray.length > 0) {
                prompt += `${topics} `;
            // }
        }

        if (experienceLevel) {
            if (experienceLevel === "beginner") {
                prompt += `for beginners: What are the basic concepts of ${type}?`
            } else if (experienceLevel === "intermediate") {

                prompt += ` for intermediate users: Explain the key components of ${type}.`;
            } else if (experienceLevel === "advanced") {

                prompt += ` for advanced users: Dive deep into advanced topics in ${type}.`;
            }
        }

        if (questionStyle) {

            if (questionStyle === "theoretical") {

                prompt += ` with a theoretical approach:  Explain the key concepts  of ${type}.`;
            } else if (questionStyle === "practical") {
                let practicalScenario = practicalScenarios[type];

                if (practicalScenario) {
                    prompt += ` with a practical scenario: ${practicalScenario}`;
                } else {
                    prompt += ` with a practical scenario: Implement a ${type} feature that does X using ${type}.`;
                }


            }

        }
        console.log({prompt})
        // console.log({chatCompletion:"hello"})

        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: "system", content: "You are a helpful assistant that generates questions." }, { role: "user", content: prompt }],
            model: "gpt-3.5-turbo",
            temperature: 0.7
        });
        // console.log({chatCompletion})
        res.status(200).send({
            question: chatCompletion.choices[0].message.content
        });
    } catch (error) {
        res.status(400).send({ "errormsg": error.message})
    }
})



module.exports = interviewRouter;