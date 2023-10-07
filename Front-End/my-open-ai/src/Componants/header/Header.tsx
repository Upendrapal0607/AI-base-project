import React from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => (
  <div className="techsphere__header section__padding" id="home">
    <div
      className="techsphere__header-content bg-[url-to-your-image] bg-cover bg-center bg-no-repeat rounded-lg" 
      style={{ backgroundImage: "url('assets/background-image-for-ai-based-interview-practice-platform.jpg')" }}
    >
      <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" style={{ fontSize: "500%" ,color: "darkpurple" }}>
        Unleash Your Interview Success With Our Innovative Platform
      </h1>
      <h2 className="text-white mt-4" style={{ fontSize: "300%",color: "darkred" }}>
        Elevate Your Interview Game with Cutting-Edge Technology – Your Path to
        Landing Your Dream Job.
      </h2>


    </div>
  </div>
);
