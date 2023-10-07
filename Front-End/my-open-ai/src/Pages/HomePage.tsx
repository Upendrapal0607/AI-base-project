import React from "react";

// import { Features } from "../Componants/features/Features";
import { Header } from "../Componants/header/Header";
import { Features } from "../Componants/features/Features";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <Features />
    </div>
  );
};

export default HomePage;
