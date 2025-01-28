
const Sidebar = () => {
  return (
    <aside
      data-aos="fade-right"
      data-aos-duration="1500"
      className="fixed my-auto h-full left-32 justify-center items-center z-50 flex-col hidden lg:flex"
    >
      <ul className="flex px-4 bg-white rounded-full shadow-lg border-r py-6 border-gray-200 flex-col items-center justify-start space-y-6 w-full text-sm font-extrabold dark:text-blue-900 text-orange-500 bg-transparent">
        <li className="relative group">
          <a
            href="#home"
            className="flex flex-col items-center justify-center w-full transition-all duration-300"
          >
            <svg
              className="w-6 h-6 text-orange-500 group-hover:text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M3 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </a>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs rounded py-1 px-2">
            Home
          </div>
        </li>
        <li className="relative group">
          <a
            href="#about"
            className="flex flex-col items-center justify-center w-full transition-all duration-300"
          >
            <svg
              className="w-6 h-6 text-orange-500 group-hover:text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              />
            </svg>
          </a>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs rounded py-1 px-2">
            About
          </div>
        </li>
        <li className="relative group">
          <a
            href="#projects"
            className="flex flex-col items-center justify-center w-full transition-all duration-300"
          >
            <svg
              className="w-6 h-6 text-orange-500 group-hover:text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M12 6v12m6-6H6"
              />
            </svg>
          </a>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs rounded py-1 px-2">
            Projects
          </div>
        </li>
        <li className="relative group">
          <a
            href="#contact"
            className="flex flex-col items-center justify-center w-full transition-all duration-300"
          >
            <svg
              className="w-6 h-6 text-orange-500 group-hover:text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M16 2H8c-1.1 0-1.99.9-1.99 2L6 20c0 1.1.89 2 1.99 2h8c1.1 0 1.99-.9 1.99-2V4c0-1.1-.89-2-1.99-2z"
              />
            </svg>
          </a>
          <div className="absolute transform mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-orange-500 text-white text-xs rounded py-1 px-2">
            Contact
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
