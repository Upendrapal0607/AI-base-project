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
  <div className="w-full flex flex-col md:flex-col">
    {/* Header Compartment */}
    <div className="w-full md:flex-1">
      <div className="md:flex flex-col justify-start items-start text-left mr-20">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Embrace the Future Today and Transform Your Career. It's Time to Make It Happen.

        </h1>
      </div>
    </div>

    {/* Feature Items */}
    <div className="md:flex-1.5 flex justify-start items-center flex-col w-full md:w-70">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export const Feature: React.FC<FeatureProps> = ({ title, text }) => (
  <div className="w-full flex justify-between flex-row m-4">
    <div className="flex-1 md:flex-30 max-w-180 mr-8">
      <h1 className="text-xl font-bold leading-6 text-white">{title}</h1>
      <div className="w-38 h-3 bg-gradient-bar shadow-md mb-1"></div>
    </div>
    <div className="flex-2 md:flex-70 max-w-390">
      <p className="text-lg text-teal-500">{text}</p>
    </div>
  </div>
);
