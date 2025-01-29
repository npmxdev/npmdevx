import React, { useState, useEffect, useRef } from "react";

const Contact = () => {
  // State to track terminal input and output
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  // Command handler
  const handleCommand = (e) => {
    e.preventDefault();
    const lowerInput = input.trim().toLowerCase();
    let newOutput = [];

    if (lowerInput === "help") {
      newOutput = [
        "Available commands:",
        "socials - Show social media links",
        "email - Show email",
        "clear - Clear terminal",
      ];
    } else if (lowerInput === "socials") {
      newOutput = [
        "Social Media:",
        <div key="github">
          GitHub:{" "}
          <a
            href="https://github.com/npmxdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            https://github.com/npmxdev
          </a>
        </div>,
        <div key="linkedin">
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/npmdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            https://linkedin.com/in/npmdev
          </a>
        </div>,
        <div key="twitter">
          Twitter:{" "}
          <a
            href="https://twitter.com/nurhaminator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            https://twitter.com/nurhaminator
          </a>
        </div>,
      ];
    } else if (lowerInput === "email") {
      newOutput = ["Email: nurmustapha02@gmail.com"];
    } else if (lowerInput === "clear") {
      setOutput([]);
      return;
    } else {
      newOutput = ["Unknown command. Type 'help' for a list of commands."];
    }
    
    // Append output to terminal output
    setOutput((prev) => [...prev, `npmdev:~$ ${input}`, ...newOutput]);
    setInput("");
  };

  const asciiArt = `
                            _             
                          | |           
  _ __  _ __  _ __ ___   _| | _____   __
 | '_ \\| '_ \\| '_ \` _ \\ / _\` |/ _ \\ \\ / / 
 | | | | |_) | | | | | | (_| |  __/\\ V /  
 |_| |_| .__/|_| |_| |_ \\__,_|\\___| \\_/   
       | |                               
       |_|                               
  `;

  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if Command (Mac) or Ctrl (Windows/Linux) and K are pressed
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault(); // Prevent default action (if any)
        if (inputRef.current) {
          inputRef.current.focus(); // Focus on the input field
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1500"
      id="contact"
      className="w-full h-screen flex flex-col items-center justify-center"
    >
      <div className="w-full text-sm sm:w-3/4 lg:w-2/3 md:w-ful mx-4 bg-white dark:bg-gray-800 border border-orange-500 p-4 rounded-lg text-orange-500">
        <div className="flex flex-col items-start space-y-4 h-80 ">
          <div className="space-x-2 relative top-0 flex">
            <div className="flex justify-center items-center">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            </div>
            <div className="flex justify-center items-center">
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            </div>
            <div className="flex justify-center items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
          </div>
          <div
              className="w-full h-auto overflow-auto"
              style={{ /* Hide the scrollbar */
                '-ms-overflow-style': 'none', /* For Internet Explorer and Edge */
                scrollbarWidth: 'none' /* For Firefox */
              }}>
                <div className="w-full text-center text-orange-500 font-mono mb-2">
              <pre className="text-md">{asciiArt}</pre>
            </div>
            {output.map((line, index) => (
              <div key={index} className="font-mono text-orange-500">
                {typeof line === 'string' ? line : line}
              </div>
            ))}
          </div>

          <form onSubmit={handleCommand} className="flex w-full">
            <span className="font-mono text-lg text-orange-500">
              ╭─npmdev:~${" "}
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="text-lg ml-4 font-mono text-orange-500 bottom-0 bg-transparent rounded-md w-full focus:outline-none"
              placeholder="type 'help' for a list of commands."
            />
            <button type="submit" className="hidden">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
