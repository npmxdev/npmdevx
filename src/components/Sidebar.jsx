import { TbSmartHome } from "react-icons/tb";
import { MdOutlineShortText, MdAlternateEmail, MdKeyboardCommandKey } from "react-icons/md";
import { GrProjects } from "react-icons/gr";

const Sidebar = () => {
  return (
    <aside
      data-aos="fade-right"
      data-aos-duration="1500"
      className="fixed my-auto h-full left-28 justify-center items-center z-50 flex-col hidden lg:flex"
    >
      <ul className="flex px-4 bg-white rounded-full shadow-lg border-r py-6 border-gray-200 flex-col items-center justify-start space-y-6 w-full text-sm font-extrabold dark:text-blue-900 text-orange-500 bg-transparent">
        <li className="relative group">
          <a
            href="#home"
            className="flex flex-col items-center justify-center w-full transition-all hover:scale-150 ease-out duration-300"
          >
            <TbSmartHome className="w-6 h-6"/>
          </a>
          <div className="absolute bottom-0 right-24 transform translate-x-full hidden group-hover:flex transition-opacity duration-300 bg-orange-500 text-white text-xs rounded py-1 px-2">
            Home
          </div>
        </li>
        <li className="relative group">
          <a
            href="#about"
            className="flex flex-col items-center justify-center w-full transition-all hover:scale-150 ease-out duration-300"
          >
            <MdOutlineShortText className="w-6 h-6"/>
          </a>
          <div className="absolute bottom-0 right-24 transform translate-x-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-orange-500 text-white text-xs rounded py-1 px-2">
            About
          </div>
        </li>
        <li className="relative group">
          <a
            href="#projects"
            className="flex flex-col items-center justify-center w-full transition-all hover:scale-150 ease-out duration-300"
          >
            <GrProjects className="w-4 h-4"/>
          </a>
          <div className="absolute bottom-0 right-24 transform translate-x-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-orange-500 text-white text-xs rounded py-1 px-2">
            Projects
          </div>
        </li>
        <li className="relative group">
          <a
            href="#contact"
            className="flex flex-col items-center justify-center w-full transition-all hover:scale-150 ease-out duration-300"
          >
            <MdAlternateEmail className="w-6 h-6"/>
          </a>
          <div className="absolute bottom-0 right-24 transform translate-x-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-orange-500 text-white text-xs rounded py-1 px-2">
            Contact
          </div>
        </li>
        <div>
      </div>
      </ul>
      

    </aside>
  );
};

export default Sidebar;
