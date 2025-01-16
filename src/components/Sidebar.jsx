const Sidebar = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1500"
      className="fixed w-full bottom-0 left-0 sm:left-1/2 md:left-40 lg:left-1/3 transform -translate-x-1/2 mb-4 lg:w-1/3 max-w-md  bg-black-50/30 backdrop-blur-xl shadow-lg rounded-full flex justify-around items-center py-1 z-50 border border-gray-200"
    >
      <ul className="flex justify-around w-full text-sm font-extrabold dark:text-blue-900 text-orange-500 bg-transparent">
        <li>
          <a
            href="#home"
            className="flex flex-col dark:text-white text-orange-500 group p-3 w-16 h-16 rounded-full justify-center items-center transition-all duration-300"
          >
            <svg
              className="w-6 h-6  group-hover:text-orange-500 transition-colors"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3} // Increased stroke width
                d="M3 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            <span className="mt-1 text-orange-500 group-hover:text-orange-500">
              Home
            </span>
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="flex  dark:text-white flex-col p-3 w-16 h-16 group rounded-full justify-center items-center transition-all duration-300"
          >
            <svg
              className="w-6 h-6 group-hover:text-orange-500 transition-colors"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3} // Increased stroke width
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              />
            </svg>
            <span className="mt-1 text-orange-500 group-hover:text-orange-500">
              About
            </span>
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="flex flex-col p-3 dark:text-white text-orange-500 w-16 h-16 group rounded-full justify-center items-center transition-all duration-300"
          >
            <svg
              className="w-6 h-6  group-hover:text-orange-500 transition-colors"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3} // Increased stroke width
                d="M12 6v12m6-6H6"
              />
            </svg>
            <span className="mt-1 text-orange-500 group-hover:text-orange-500">
              Projects
            </span>
          </a>
        </li>
        <li>
          <a
            href="#certifications"
            className="flex flex-col text-orange-500 dark:text-white p-3 w-16 h-16 group rounded-full justify-center items-center transition-all duration-300"
          >
            <svg
              className="w-6 h-6  group-hover:text-orange-500 transition-colors"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3} // Increased stroke width
                d="M4 6h16M4 12h16m-6 6h6"
              />
            </svg>
            <span className="mt-1 text-orange-500 group-hover:text-orange-500">
              Certificates
            </span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="flex flex-col dark:text-white text-orange-500 p-3 w-16 h-16 group rounded-full justify-center items-center transition-all duration-300"
          >
            <svg
              className="w-6 h-6  group-hover:text-orange-500 transition-colors"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3} // Increased stroke width
                d="M16 2H8c-1.1 0-1.99.9-1.99 2L6 20c0 1.1.89 2 1.99 2h8c1.1 0 1.99-.9 1.99-2V4c0-1.1-.89-2-1.99-2z"
              />
            </svg>
            <span className="mt-1 text-orange-500 group-hover:text-orange-500">
              Contact
            </span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
