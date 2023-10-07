import React from 'react';
import logo from './logo.svg';
import './App.css';
import AllRoute from './Routes/AllRoute';
import { ToastContainer } from "react-toastify";
import { Navbar } from './Componants/Navbar';

function App() {
  return (
    <div className="gradient__bg">
      <Navbar />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <AllRoute />
    </div>
  );
}

export default App;
