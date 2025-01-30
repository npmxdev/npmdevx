import { FaGithub } from "react-icons/fa6";


const Option = ({ image, mainText, subText, repoLink, liveLink, techStack }) => {
  return (
    <div data-aos="fade-up"
    data-aos-duration="1500" className="border-2 border-orange-500 group mx-4 relative p-2 dark:bg-gray-800 bg-white my-2 rounded-lg cursor-pointer transition-all duration-150 ease-in-out hover:shadow-[10px_10px_0_#fbbf24,20px_20px_0_#f97316] md:hover:-translate-x-2 md:hover:-translate-y-2">
      <div
        className="w-full h-[250px] bg-gray-500 rounded-lg"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "contain", backgroundPosition: "center" }}
      ></div>
      <div className="p-4 flex flex-col gap-4">
        <h2 className="text-2xl font-extrabold text-orange-500 truncate">{mainText}</h2>
        <p className="text-sm text-justify dark:text-gray-200 text-gray-600 truncate group-hover:text-wrap">{subText}</p>
        <div className="flex justify-between items-center">
          <span className="bg-orange-200 text-gray-500 font-bold py-1 px-3 rounded-2xl w-3/5 text-xs tracking-tight">
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
      mainText: "Mafarims",
      subText: "Our capstone project for my degree, 'mafarims' is a comprehensive, web-based system designed to efficiently manage agricultural resources across the BARMM region. It streamlines the inventory management, distribution, and tracking of agricultural supplies and equipment. The system also integrates the Brevo email API for notifications, ensuring effective communication during resource distribution.",
      repoLink: "https://github.com/npmxdev/mafarims",
      liveLink: "https://mafarims.infinityfreeapp.com/",
      techStack: ["PHP", "Tailwind CSS", "MySQL", "JavaScript", "Brevo Email API"],
    },
    {
      image: "/sumitupLanding.png",
      mainText: "LetsSumItUp",
      subText: "LetsSumItUp is an AI-powered website that summarizes articles found online just by providing the URL. By leveraging OpenAI GPT-4, the site instantly generates concise summaries, making it easier for users to digest long-form content from the web, saving time and enhancing productivity.",
      repoLink: "https://github.com/npmxdev/sumitup",
      liveLink: "https://letssumitup.vercel.app",
      techStack: ["React", "Tailwind CSS", "Rapid API Integration", "OpenAI GPT-4"],
    },   
    {
      image: "/npmdevLanding.png",
      mainText: "<npmdev/>",
      subText: "npmdev is my personal portfolio website, showcasing my development skills and projects. It features a clean and modern design with an emphasis on my technical abilities and the tools I work with. The site is built to provide potential collaborators and employers with a clear view of my experience and expertise.",
      repoLink: "https://github.com/npmxdev/npmdev",
      liveLink: "https://npmdevx.vercel.app/",
      techStack: ["React", "Tailwind CSS", "AOS"],
    },
    {
      image: "/marvelcodexLanding.png",
      mainText: "Marvel Codex",
      subText: "Marvel Codex is a website where users can search for Marvel Universe characters and explore the comics they have appeared in. With a sleek interface and powerful search features, it allows Marvel fans to dive deeper into the vast world of Marvel characters and their comic book history.",
      repoLink: "https://github.com/npmxdev/marvelcodex",
      liveLink: "https://marvelcodex.vercel.app",
      techStack: ["React", "Tailwind CSS", "Marvel API Integration"],
    }, 
  ];

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1500"
      id="projects"
      className="w-full flex flex-col items-center mt-36 md:mt-12 justify-center"
    >
      <h1 className="text-2xl font-extrabold mb-4 text-orange-500 w-full max-w-4xl">/my_projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-12 w-full max-w-4xl">
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
