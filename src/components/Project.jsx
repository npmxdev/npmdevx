import React, { useState } from "react";

const Option = ({ image, mainText, subText, isActive, onClick, repoLink, liveLink, techStack }) => {
  return (
    <div
      className={`overflow-hidden relative flex-1 min-w-[60px] mx-2 my-2 cursor-pointer transition-transform duration-500 ease-in-out rounded-xl ${
        isActive ? "flex-grow-[10000] scale-100 max-w-[600px]" : ""
      }`}
      onClick={onClick}
      style={{ backgroundImage: `url(${image})`, backgroundSize: "auto 120%", backgroundPosition: "center" }}
    >
      <div
        className="absolute inset-0 bottom-0 h-full rounded-xl"
        style={{
          backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
        }}
      ></div>

      <div
        className={`absolute bottom-0 left-0 right-0 h-[120px] transition-shadow duration-500 ease-in-out ${
          isActive
            ? "shadow-inset shadow-black shadow-[0_-120px_120px_-120px]"
            : "shadow-inset shadow-black shadow-[0_-120px_0px_-120px]"
        }`}
      ></div>
      <div className="absolute bottom-4 left-4 flex items-center">
        <div className="ml-2 text-white">
          <div className="font-bold text-xl">{mainText}</div>
          <div className="opacity-90 text-sm">{subText}</div>
          <div className="mt-2 text-xs text-gray-400">
            <span className="font-semibold">Tech Stack:</span> {techStack.join(", ")}
          </div>
          <div className="mt-4 space-x-2">
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-sm text-white p-1 rounded-full hover:bg-white hover:text-black transition-colors"
            >
              Repository
            </a>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-sm text-white p-1 rounded-full hover:bg-white hover:text-black transition-colors"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  const [activeOption, setActiveOption] = useState(null);

  const options = [
    {
      image: "/mafarimsLanding.png",
      icon: "fa-database",
      mainText: "MAFARIMS",
      subText: "A comprehensive system for managing agricultural resources in the BARMM region.",
      repoLink: "https://github.com/npmxdev/mafarims",
      liveLink: "https://mafarims.infinityfreeapp.com/",
      techStack: ["PHP", "Tailwind CSS", "MySQL", "JavaScript"],
    },
    {
      image: "/npmdevLanding.png",
      icon: "fa-cogs",
      mainText: "NPMDEV",
      subText: "A development environment for managing npm packages efficiently with real-time updates.",
      repoLink: "https://github.com/npmxdev/npmdev",
      liveLink: "https://npmdevx.vercel.app/",
      techStack: ["React", "Tailwind CSS", "AOS"],
    },
    {
      image: "/marvelcodexLanding.png",
      icon: "fa-brain",
      mainText: "MARVEL CODEX",
      subText: "An interactive catalog of Marvel Universe characters and lore, with search and filters.",
      repoLink: "https://github.com/npmxdev/marvelcodex",
      liveLink: "https://marvelcodex.vercel.app",
      techStack: ["React", "Tailwind CSS", "Marvel API Integration"],
    },
  ];

  const handleOptionClick = (index) => {
    setActiveOption(index === activeOption ? null : index);
  };

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1500"
      id="projects"
      className="w-full flex flex-col items-center mt-36 md:mt-12 justify-center"
    >
      <div className="flex items-stretch overflow-hidden min-w-[600px] max-w-[900px] w-[calc(100%-100px)] h-[400px]">
        {options.map((option, index) => (
          <Option
            key={index}
            image={option.image}
            icon={option.icon}
            mainText={option.mainText}
            subText={option.subText}
            isActive={activeOption === index}
            onClick={() => handleOptionClick(index)}
            repoLink={option.repoLink}
            liveLink={option.liveLink}
            techStack={option.techStack}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
