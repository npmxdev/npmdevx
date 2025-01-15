import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

const About = () => {
  useEffect(() => {
    Prism.highlightAll(); // Highlight all code blocks
  }, []);

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      id="about"
      className="w-full h-screen flex items-center justify-center"
    >
      <div className="w-full sm:w-3/4 lg:w-2/3 h-screen md:w-full flex flex-col items-start text-left px-8 py-12">
        <h1 className="text-2xl font-extrabold mb-2 text-orange-500">/about_me</h1>

        <div className="w-full mb-6">
            <p className="text-lg text-black leading-relaxed">
            Hello World! I’m a fresh graduate with a Bachelor’s degree in Information Technology from the Philippines.
            </p>
            <p className="text-lg text-black leading-relaxed mt-1">
            I have a strong interest in web development, software engineering, and exploring new technologies. I’m
            passionate about building efficient and user-friendly applications that solve real-world problems.
            </p>
        </div>

        <div className="w-full mb-2 transition-all duration-300 hover:scale-105">
          <pre style={{ fontSize: '1rem', lineHeight: '1.2rem' }} className="text-xs bg-gray-900 p-2 rounded-md font-mono">
            <code className="language-javascript">
              {`const npmdev = {
  name: 'Nur-hamin P. Mustapha',
  technologies: ['React', 'PHP', 'JavaScript', 'Bootstrap',
    'TailwindCSS', 'MySql', 'MongoDB', 'Python', 'Linux'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver
    );
  }
};`}
            </code>
          </pre>
        </div>

        <p className="mt-2 text-sm text-gray-500 italic">
          “Code is like humor. When you have to explain it, it’s bad.” – Cory House
        </p>
      </div>
    </section>
  );
};

export default About;
