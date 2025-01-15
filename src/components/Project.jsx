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

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div data-aos="fade-right" data-aos-duration="1500" className="mx-3 border-gray-100 border mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                className="rounded-t-lg"
                src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                alt="Hollywood Sign on The Hill" />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
              <p className="mb-4 text-base">
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
              <a 
                href="https://github.com/yourusername/project1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-center p-2 text-orange-500 rounded-full"
              >
                <FaLink className="mr-2" />
              </a>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="1500" className="mx-3 border-gray-100 border mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                className="rounded-t-lg"
                src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
                alt="Palm Springs Road" />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
              <p className="mb-4 text-base">
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
              <a 
                href="https://github.com/yourusername/project2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-center p-2 text-orange-500 rounded-full"
              >
                <FaLink className="mr-2" />
              </a>
            </div>
          </div>

          <div data-aos="fade-right" data-aos-duration="1500" className="mx-3 border-gray-100 border mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                className="rounded-t-lg"
                src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
                alt="Skyscrapers" />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
              <p className="mb-4 text-base">
                This is a longer card with supporting text below as a natural lead-in to additional content.
              </p>
              <a 
                href="https://github.com/yourusername/project3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-center p-2 text-orange-500 rounded-full"
              >
                <FaLink className="mr-2" />
              </a>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="1500" className="mx-3 border-gray-100 border mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
              <img
                className="rounded-t-lg"
                src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                alt="Los Angeles Skyscrapers" />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
              <p className="mb-4 text-base">
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
              <a 
                href="https://github.com/yourusername/project4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-center p-2 text-orange-500 rounded-full"
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
