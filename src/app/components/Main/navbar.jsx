// components/Navbar.js
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
   
          <span className="ml-2 font-bold text-xl text-gray-800">
            SMART FARMING
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/home" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-gray-900">
            Services
          </Link>
          <Link href="/crop-solutions" className="text-gray-700 hover:text-gray-900">
            Crop Solutions
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook text-blue-600 hover:text-blue-800 text-lg"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-pink-600 hover:text-pink-800 text-lg"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-blue-700 hover:text-blue-900 text-lg"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github text-gray-800 hover:text-black text-lg"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
