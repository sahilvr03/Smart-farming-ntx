import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger icon

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the sidebar visibility
  };

  return (
    <div className="relative">
      {/* Hamburger icon for mobile */}
      <button
        onClick={toggleSidebar}
        className="sm:hidden text-white absolute top-4 left-4 p-2 z-50"
      >
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>

      {/* Sidebar */}
      <div
        className={`w-[20vw] h-screen bg-blue-900 text-white fixed z-50 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } sm:block`} // Show sidebar only on larger screens and when open on mobile
      >
        <div className="text-2xl font-bold p-4">
          <span className="text-green-500">SMART FARMING</span>
        </div>
        <ul>
          {["Dashboard", "Cluster", "Device / Controller", "User Management"].map(
            (item, index) => (
              <li
                key={index}
                className="py-3 px-6 hover:bg-blue-700 cursor-pointer"
              >
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
