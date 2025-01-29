import { FaGithub } from "react-icons/fa6";


const Option = ({ image, mainText, subText, repoLink, liveLink, techStack }) => {
  return (
    <div className=" mx-4 relative p-2 border-gray-300 bg-white border-2 my-2 border-transparent rounded-lg cursor-pointer transition-all duration-150 ease-in-out hover:shadow-[10px_10px_0_#fbbf24,20px_20px_0_#f97316] md:hover:border-orange-500 md:hover:-translate-x-2 md:hover:-translate-y-2">
      <div
        className="w-full h-[250px] bg-gray-500 rounded-lg"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "contain", backgroundPosition: "center" }}
      ></div>
      <div className="p-4 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-black truncate">{mainText}</h2>
        <p className="text-sm text-gray-600 truncate">{subText}</p>
        <div className="flex justify-between items-center">
          <span className="bg-orange-200 text-gray-500 font-bold py-1 px-3 rounded-2xl text-xs tracking-tight">
            {techStack.join(", ")}
          </span>
          <div className="flex items-center gap-2">
            <div 
              onClick={() => window.open(liveLink, "_blank")} 
              className="w-12 h-12 flex items-center justify-center bg-orange-200 rounded-full transition-transform duration-300 hover:rotate-[-45deg] cursor-pointer"
            >
              🚀
            </div>
            <div 
              onClick={() => window.open(repoLink, "_blank")} 
              className="w-12 h-12 flex items-center justify-center bg-orange-200 text-white rounded-full transition-transform duration-300 hover:scale-110 cursor-pointer"
            > 
              <FaGithub className="text-black h-8"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  const options = [
    {
      image: "/mafarimsLanding.png",
      mainText: "mafarims",
      subText: "A comprehensive system for managing agricultural resources in the BARMM region.",
      repoLink: "https://github.com/npmxdev/mafarims",
      liveLink: "https://mafarims.infinityfreeapp.com/",
      techStack: ["PHP", "Tailwind CSS", "MySQL", "JavaScript"],
    },
    {
      image: "/npmdevLanding.png",
      mainText: "npmdev",
      subText: "A development environment for managing npm packages efficiently with real-time updates.",
      repoLink: "https://github.com/npmxdev/npmdev",
      liveLink: "https://npmdevx.vercel.app/",
      techStack: ["React", "Tailwind CSS", "AOS"],
    },
    {
      image: "/marvelcodexLanding.png",
      mainText: "Marvel Codex",
      subText: "An interactive catalog of Marvel Universe characters and lore, with search and filters.",
      repoLink: "https://github.com/npmxdev/marvelcodex",
      liveLink: "https://marvelcodex.vercel.app",
      techStack: ["React", "Tailwind CSS", "Marvel API Integration"],
    },
    {
      image: "/sumitupLanding.png",
      mainText: "LetsSumItUp",
      subText: "An interactive catalog of Marvel Universe characters and lore, with search and filters.",
      repoLink: "https://github.com/npmxdev/sumitup",
      liveLink: "https://letssumitup.vercel.app",
      techStack: ["React", "Tailwind CSS", "Rapid API Integration", "OpenAI GPT-4"],
    },
  ];

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1500"
      id="projects"
      className="w-full flex flex-col items-center mt-36 md:mt-12 justify-center"
    >
      <h1 className="text-2xl text-start font-extrabold mb-4 text-orange-500">/my_projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-12 w-full max-w-5xl">
        {options.map((option, index) => (
          <Option
            key={index}
            image={option.image}
            mainText={option.mainText}
            subText={option.subText}
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
