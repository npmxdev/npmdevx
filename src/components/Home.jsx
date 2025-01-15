

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faArrowDown, faArrowUpRightDots, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <section data-aos="fade-down" data-aos-duration="2000" id="home" className="mt-16 w-full flex items-center justify-center">
      <div className="w-full sm:w-3/4 lg:w-2/3 md:w-full flex flex-col items-center justify-center text-center px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center mb-2">
          <img
            src="assets/npm-DtnH3aJs.jpg"
            alt="Nur-hamin P. Mustapha"
            className="shadow-md rounded-full w-48 h-48 md:w-48 md:h-48 md:mr-4 mt-2 md:ml-16"
          />
          <div className="text-start md:text-start md:ml-4">
            <p className="text-sm text-gray-700 font-semibold">Hi there!👋 I'm</p>
            <h1 className="text-3xl sm:text-md md:text-5xl font-bold text-orange-500">Nur-hamin Mustapha</h1>
              <p className="text-sm text-start mt-4">Technologies I have worked with:</p>
              <div className="mt-4 flex badges flex-wrap lg:mr-16 justify-center gap-2">
                <img
                  src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"
                  alt="PHP"
                  className="h-4 animate-floating delay-0"
                />
                <img
                  src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                  alt="JavaScript"
                  className="h-4 animate-floating delay-50"
                />
                <img
                  src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                  alt="React"
                  className="h-4 animate-floating delay-100"
                />
                <img
                  src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
                  alt="Python"
                  className="h-4 animate-floating delay-600"
                />
                <img
                  src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white"
                  alt="C#"
                  className="h-4 animate-floating delay-800"
                />
                <img
                  src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
                  alt="Bootstrap"
                  className="h-4 animate-floating delay-1000"
                />
                <img
                  src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
                  alt="Tailwind CSS"
                  className="h-4 animate-floating delay-1200"
                />
                <img
                  src="https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white"
                  alt="DaisyUI"
                  className="h-4 animate-floating delay-1400"
                />
                <img
                  src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                  alt="HTML5"
                  className="h-4 animate-floating delay-1600"
                />
                <img
                  src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                  alt="CSS3"
                  className="h-4 animate-floating delay-1800"
                />
                <img
                  src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=mui&logoColor=white"
                  alt="Material-UI"
                  className="h-4 animate-floating delay-2000"
                />
                <img
                  src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white"
                  alt="MySQL"
                  className="h-4 animate-floating delay-2200"
                />
                <img
                  src="https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=adobe-photoshop&logoColor=white"
                  alt="Photoshop"
                  className="h-4 animate-floating delay-2400"
                />
                <img
                  src="https://img.shields.io/badge/Microsoft%20Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white"
                  alt="Excel"
                  className="h-4 animate-floating delay-2600"
                />
            </div>
          </div>
        </div>

        <div className="mb-4 max-w-3xl">
        <p className="text-sm md:text-base flex justify-between text-black leading-relaxed">
        I’m a tech enthusiast who loves building websites that run smoothly and look great 🌟 (and yes, sometimes I accidentally break them... but hey, that’s part of the fun!). When I’m not squashing bugs 🐛💥, you’ll find me diving into new tech 📚, enjoying a cup of coffee ☕, playing music 🎸🎹 or pretending to understand some complex algorithms 🤓. "Not quite a coding wizard yet, but definitely the sidekick you need 💻. Need someone who's quick to learn, faster to think, and always brings a smile to the project? Let’s team up! 🙌"
        </p>
        </div>
        <div className="github-chart mb-4 p-4">
            <a href="https://github.com/npmxdev/" target="_blank" className="text-start h-5"><img src="https://ghchart.rshah.org/npmxdev" alt="npmdev's Github chart" /></a>
        </div>
        <div className='rounded-full border-2 border-slate-400 px-2'>
            <a href="#about" className='animate-pulse'><FontAwesomeIcon icon={faArrowDown} /></a>
        </div>
      </div>
    </section>
  );
};

export default Home;