"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your Email.js service ID
        "YOUR_TEMPLATE_ID", // Replace with your Email.js template ID
        formData,
        "YOUR_USER_ID" // Replace with your Email.js user ID
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4
    
     bg-cover bg-center"
            style={{ backgroundImage: "url('/images/1.jpg')" }}>
  
 

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-5"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl text-center text-white mt-16">
        <h1 className="text-4xl font-bold mb-8 text-white">Contact Us</h1>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/60 backdrop-blur-lg shadow-lg rounded-lg p-8 w-full max-w-2xl mx-auto"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm  font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg bg-white/60 backdrop-blur-lg shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border bg-white/60 backdrop-blur-lg border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="mt-1 block w-full p-3 border border-gray-300 bg-white/60 backdrop-blur-lg rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Send Message
          </button>
          {status && (
            <p
              className={`mt-4 text-center ${
                status.includes("successfully")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {status}
            </p>
          )}
        </form>

        {/* Social Links Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-yellow-100 mb-4">
            Follow Us
          </h2>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-yellow-400 hover:text-yellow-500"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-green-300 hover:text-green-400"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-pink-400 hover:text-pink-500"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-100 hover:text-gray-200"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
