import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you'll use this for routing
import backgroundImage from '../../Image/bgimage.png'; 
import projectImage from '../../Image/project.png';
const Main = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-12 bg-blue-500 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 p-12 flex items-center justify-center">
        <div className="bg-cover bg-center  w-full h-[500px] absolute" style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.3 }}></div>
      </div>
      
      {/* Left Side */}
      <div className="md:w-1/2 px-4 py-8 text-center md:text-left z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 ">Project Title</h1>
        <p className="text-white text-lg md:text-xl mb-8">Description of your project goes here.</p>
        <img src={projectImage} alt="Project" className="rounded-lg shadow-lg md:max-w-xs mx-auto md:mx-0" />
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex flex-col items-center justify-center px-4 py-8 z-10">
        <button className="bg-white text-blue-500 hover:bg-blue-600 hover:text-white py-3 px-6 rounded-lg text-lg font-semibold mb-4 w-full md:w-auto">Get Started</button>
        <button className="bg-[#FF8911] text-white hover:bg-blue-600 hover:text-white py-3 px-12 rounded-lg text-lg font-semibold w-full md:w-auto">Login</button>
      </div>
    </div>
  );
};

export default Main;