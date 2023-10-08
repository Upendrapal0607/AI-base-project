import React from "react";

interface FeatureProps {
  title: string;
  text: string;
}

export const featuresData = [
  {
    title: "Tailored Interview Simulations",
    text:
      "Immerse yourself in lifelike interview scenarios customized for your job role. Our platform offers personalized interview simulations, giving you the perfect opportunity to practice and refine your responses with confidence.",
  },
  {
    title: "AI-Enhanced Real-Time Feedback",
    text:
      "Receive immediate, AI-driven feedback on your interview performance. Our state-of-the-art natural language processing technology evaluates crucial aspects like communication skills, clarity, and relevance. You'll receive constructive suggestions and tailored recommendations to enhance your interview techniques.",
  },
  {
    title: "Explore Industry-Relevant Question Bank",
    text:
      "Dive into an extensive collection of industry-specific interview questions. Gain exposure to the questions commonly asked in your field, ensuring you're well-prepared for any challenge. Our platform keeps you ahead of the game by offering a diverse range of questions tailored to your desired job sector.",
  }
];

export const Features: React.FC = () => (
  <div className="w-full flex flex-col items-center mx-auto bg-gray-100 p-6">
    {/* Header Text */}
    <h1 className="z-10 text-4xl font-extrabold text-darkblue bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text">
      Embrace the Future Today and Transform Your Career. It's Time to Make It Happen.
    </h1>

    {/* Feature Items */}
    <div className="md:w-95% flex flex-col md:flex-row">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export const Feature: React.FC<FeatureProps> = ({ title, text }) => (
  <div className="mb-10">
    <h1 className="text-xl font-semibold text-teal-500 mb-2">{title}</h1>
    <div className="w-10 h-1 bg-gradient-bar mb-4"></div>
    <p className="text-lg text-gray-800">{text}</p>
  </div>
);
