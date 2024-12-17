"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Roboto } from "next/font/google"; // Optional font import

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.4) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle modal function
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`bg-transparent shadow-md fixed w-full top-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-white lg:hidden" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center">
            <span
              className={`ml-2 font-bold text-xl ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              SMART FARMING
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-black md:text-white hover:text-gray-300">
              Home
            </Link>
            <Link href="/About" className="text-black md:text-white hover:text-gray-300">
              About
            </Link>
            <Link href="/Services" className="text-black md:text-white hover:text-gray-300">
              Services
            </Link>
            <Link href="/crop-solutions" className="text-black md:text-white hover:text-gray-300">
              Crop Solutions
            </Link>
            <Link href="/contact" className="text-black md:text-white hover:text-gray-300">
              Contact
            </Link>
          </div>

          {/* Menu Icon for Mobile */}
          <div className="sm:flex md:hidden">
            <button
              onClick={toggleModal}
              className={`p-2 rounded-md shadow-md border-y-2  ${
                isScrolled ? "border-black" : "border-white"
              }`}
            >
              <span className={`material-icons  ${
                isScrolled ? "text-black" : "text-white"
              }`}>menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Modal for Mobile Navigation */}
      <div
  className={ ` lg:hidden fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
    isModalOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
  }`}
  onClick={toggleModal} // Close modal when clicking outside the content
>
  {/* Full-Width Navigation Links */}
  <div
    className="w-full bg-white shadow-md p-6 flex flex-col justify-center"
    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
  >
    <nav className="flex justify-around items-center">
      <Link
        href="/"
        onClick={toggleModal}
        className="text-gray-800 hover:text-blue-500 text-sm font-semibold"
      >
        Home
      </Link>
      <Link
        href="/About"
        onClick={toggleModal}
        className="text-gray-800 hover:text-blue-500 text-sm font-semibold"
      >
        About
      </Link>
      <Link
        href="/Services"
        onClick={toggleModal}
        className="text-gray-800 hover:text-blue-500 text-sm font-semibold"
      >
        Services
      </Link>
      <Link
        href="/"
        onClick={toggleModal}
        className="text-gray-800 hover:text-blue-500 text-sm font-semibold"
      >
        Crop Solutions
      </Link>
      <Link
        href="/"
        onClick={toggleModal}
        className="text-gray-800 hover:text-blue-500 text-sm font-semibold"
      >
        Contact
      </Link>
    </nav>
  </div>
</div>

    </>
  );
};

export default Navbar;
