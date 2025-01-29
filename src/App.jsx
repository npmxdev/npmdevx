import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Header from "./components/Header";

import { MdKeyboardCommandKey } from "react-icons/md";

const LoadingScreen = () => {
  const [text, setText] = useState("");
  const codeLines = [
    "Initializing modules...",
    "Fetching dependencies...",
    "Compiling assets...",
    "Launching app...",
  ];
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine < codeLines.length) {
      let index = 0;
      const typingInterval = setInterval(() => {
        setText(codeLines[currentLine].slice(0, index + 1)); // Update text incrementally
        index++;
        if (index === codeLines[currentLine].length) {
          clearInterval(typingInterval); // Stop typing once the line is complete
          setTimeout(() => {
            setText(""); // Reset text for the next line
            setCurrentLine((prev) => prev + 1); // Move to the next line
          }, 10); // Pause before starting the next line
        }
      }, 30); // Typing speed

      return () => clearInterval(typingInterval); // Cleanup interval
    }
  }, [currentLine]);

  return (
    <div className="selection:text-white cursor-crosshair selection:bg-orange-500 absolute bottom-0 items-end justify-start z-50">
      <div className="relative text-left font-mono text-lg p-4 rounded-t-lg w-96 mb-20 ml-2 md:ml-6">
        <h1 className="font-extrabold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 inline-block bg-clip-text text-transparent mb-3 text-3xl z-20">
          &lt;npmdev/&gt;
        </h1>
        {codeLines.slice(0, currentLine).map((line, index) => (
          <div key={index} className="text-gray-900">
            <span className="text-orange-500 font-bold">npmdev:~$ </span>
            {line}
          </div>
        ))}
        {currentLine < codeLines.length && (
          <div className="text-gray-900">
            <span className="text-orange-500 font-bold">npmdev:~$ </span>
            {text || <span className="text-orange-400">_</span>}
          </div>
        )}
      </div>
    </div>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="fixed inset-0 h-full w-full transition-colors duration-500 ease-in-out dark:bg-gray-800 dark:bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] dark:text-white bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
          ></div>
          <div className="selection:text-white cursor-crosshair selection:bg-orange-500 text-xl">
            <Header />
            <div className="relative h-full w-full flex flex-col sm:flex-row">
              <Sidebar />
              <div className="lg:flex fixed hidden bottom-5 z-40 right-5 text-sm group text-orange-600 items-center animate-pulse font-bold">
                Press
                <MdKeyboardCommandKey className="dark:text-white text-xl text-gray-700 font-bold cursor-pointer mx-1" />
                + K to learn more about me.
              </div>
              <div className="w-full flex flex-col justify-center overflow-hidden">
                <Home />
                <About />
                <Project />
                <Contact />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
