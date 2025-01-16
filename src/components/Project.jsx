import { FaLink } from 'react-icons/fa'; // Importing FontAwesome icon

const Project = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1500"
      id="projects"
      className="w-full flex flex-col items-center mt-36 md:mt-12 justify-center"
    >
      <div className="w-full sm:w-3/4 lg:w-2/3 md:w-full flex flex-col items-start text-left px-8 py-12">
        <div className="md:w-1/3 text-left mb-4 md:mb-0">
          <h1 className="text-2xl font-extrabold text-orange-500">/my_projects</h1>
        </div>

        <div className="grid grid-cols-1">
          <div data-aos="fade-right" data-aos-duration="1500" className="mx-3 sm:w-auto h-96 mt-6 flex flex-col sm:flex-row rounded-lg dark:border-gray-700 border-2 dark:bg-gray-800 bg-white shadow-lg dark:bg-surface-dark dark:text-white transition-all transform hover:scale-105 hover:shadow-2xl duration-300">
            <div>
              <a href="#!">
                <img
                  className="rounded-l-lg scale-75 sm:h-full right-0"
                  src="demo1.png"
                  alt="mafarims"
                />
              </a>
            </div>
            <div className="p-6 md:absolute bg-white justify-between flex flex-col sm:w-1/3 h-full dark:bg-gray-800">
              <h5 className="mb-2 text-2xl font-extrabold leading-tight text-orange-500 transition-colors duration-300">mafarims.tech</h5>
              <p className="mb-4 text-base dark:text-white text-gray-600">
                A comprehensive inventory management system for MAFAR, focused on motorpool and agricultural supplies.
              </p>
              <a 
                href="https://github.com/yourusername/project1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="items-center text-center p-2 text-orange-500 rounded-full hover:text-orange-700"
              >
                <FaLink className="mr-2" />
              </a>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="1500" className="mx-3 sm:w-auto mt-6 flex flex-col sm:flex-row rounded-lg dark:border-gray-700 border-2 dark:bg-gray-800 bg-white shadow-lg dark:bg-surface-dark dark:text-white transition-all transform hover:scale-105 hover:shadow-2xl duration-300">
            <div>
              <a href="#!">
                <img
                  className="rounded-l-lg sm:h-full right-0"
                  src="demo1.png"
                  alt="mafarims"
                />  
              </a>
            </div>

            <div className="p-6 justify-between flex flex-col sm:w-1/3 h-full dark:bg-gray-800">
              <h5 className="mb-2 text-2xl font-extrabold leading-tight text-orange-500 transition-colors duration-300">mafarims.tech</h5>
              <p className="mb-4 text-base dark:text-white text-gray-600">
                A comprehensive inventory management system for MAFAR, focused on motorpool and agricultural supplies.
              </p>
              <a 
                href="https://github.com/yourusername/project1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="items-center text-center p-2 text-orange-500 rounded-full hover:text-orange-700"
              >
                <FaLink className="mr-2" />
              </a>
            </div>
          </div>

          <div data-aos="fade-right" data-aos-duration="1500" className="mx-3 sm:w-auto mt-6 flex flex-col sm:flex-row rounded-lg dark:border-gray-700 border-2 dark:bg-gray-800 bg-white shadow-lg dark:bg-surface-dark dark:text-white transition-all transform hover:scale-105 hover:shadow-2xl duration-300">
            <div>
              <a href="#!">
                <img
                  className="rounded-l-lg sm:h-full right-0"
                  src="demo1.png"
                  alt="mafarims"
                />
              </a>
            </div>
            <div className="p-6 justify-between flex flex-col sm:w-1/3 h-full dark:bg-gray-800">
              <h5 className="mb-2 text-2xl font-extrabold leading-tight text-orange-500 transition-colors duration-300">mafarims.tech</h5>
              <p className="mb-4 text-base dark:text-white text-gray-600">
                A comprehensive inventory management system for MAFAR, focused on motorpool and agricultural supplies.
              </p>
              <a 
                href="https://github.com/yourusername/project1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="items-center text-center p-2 text-orange-500 rounded-full hover:text-orange-700"
              >
                <FaLink className="mr-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
