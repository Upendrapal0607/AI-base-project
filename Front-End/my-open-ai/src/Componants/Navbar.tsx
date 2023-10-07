import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between py-5 items-center">
      <div className="w-60 rounded-full overflow-hidden">
        <Link to="/">
          <img src="assets/logo1.jpg" alt="Logo" className="w-full h-auto" />
        </Link>
      </div>
      <div className="text-white flex gap-10 p-5">
        <Link to="/" className="font-bold cursor-pointer">
          <span>Home</span>
        </Link>
        <Link
          to="/interview"
          className="font-bold cursor-pointer"
        >
          <span>Interviews</span>
        </Link>
      </div>
    </nav>
  );
};
