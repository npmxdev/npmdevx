import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

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
        <h1 className="text-2xl font-extrabold mb-4 text-orange-500">/about_me</h1>

        <div className="w-full mb-6">
          <p className="md:text-base text-sm text-black dark:text-white leading-relaxed">
            <span className='ml-6'></span>Hey there! 👋 I’m a fresh graduate with a <span className="font-bold text-blue-500">Bachelor’s degree in Information Technology</span> from the Philippines 🇵🇭.
            I’m deeply passionate about <span className="font-bold text-green-500">web development</span> and <span className="font-bold text-orange-500">software engineering</span>. I love diving into new technologies and using them to create <span className="font-bold text-yellow-500">innovative solutions</span>. My goal is to build <span className="font-bold text-red-500">efficient</span>, <span className="font-bold text-teal-500">user-friendly</span> applications that make a real difference in the world.
          </p>
        </div>

        <div className="md:w-3/4 w-full mx-auto mb-2 transition-all duration-300 hover:scale-105">
          <pre style={{ fontSize: '0.9rem', lineHeight: '1.2rem' }} className="bg-gray-600 p-2 rounded-md font-mono">
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

        <p className="mt-2 text-sm dark:text-gray-300 text-gray-500 italic">
          “Code is like humor. When you have to explain it, it’s bad.” – Cory House
        </p>
      </div>
    </section>
  );
};

export default About;
