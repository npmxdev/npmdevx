import React, { useState, useEffect } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply the theme to the <html> tag
  useEffect(() => {
    const root = document.documentElement; // Access the <html> element
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div>
      <a href="https://npmdevx.vercel.app">
        <h1
          data-aos="fade-up"
          data-aos-duration="1500"
          className="absolute lg:fixed left-6 md:top-4 top-6 font-extrabold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 inline-block bg-clip-text text-transparent mb-3 text-xl md:text-3xl z-20"
        >
          &lt;npmdev/&gt;
        </h1>
      </a>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="absolute lg:fixed right-10 top-6 z-30"
      >
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="toggle"
            className="sr-only peer"
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)} // Toggle dark mode
          />
          {/* Background Animation */}
          <div className="absolute -z-10 animate-ping peer-checked:bg-blue-800 bg-orange-500 rounded-full w-14 h-8"></div>
          {/* Switch Background */}
          <div
            className="w-14 h-8 bg-amber-300 rounded-full 
              peer-checked:bg-blue-300 
              border border-orange-400 
              peer-checked:border-blue-800
              transition-colors duration-300
              shadow-orange-500 shadow-md
              peer-checked:shadow-blue-800"
          ></div>
          {/* Switch Toggle */}
          <div
            className="absolute left-1 top-1 w-6 h-6 bg-orange-400 rounded-full 
              peer-checked:bg-blue-900
              peer-checked:translate-x-6
              transition-transform duration-300"
          ></div>
        </label>
      </div>
    </div>
  );
};

export default Header;
