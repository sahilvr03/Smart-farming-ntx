"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_USER_ID"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        () => {
          setStatus("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-75"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl text-center text-white mt-16">
        <h1 className="text-5xl font-extrabold mb-8 lg:mb-4">Contact Us</h1>
        <p className="mb-8 lg:mb-4 text-lg text-gray-300">
          We'd love to hear from you! Fill out the form below and we'll get back
          to you as soon as possible.
        </p>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-lg shadow-xl rounded-xl p-8 lg:p-6 w-full max-w-2xl mx-auto grid grid-cols-1 gap-6"
        >
          <div>
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
              className="mt-1 block w-full p-3  border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
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
                className="mt-1 lg:mt-0 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 block w-full lg:mt-0 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
          <div>
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
              className="mt-1 lg:mt-0 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-lg shadow-md hover:from-green-600 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-green-300"
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
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-yellow-100 mb-4">
            Follow Us
          </h2>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-yellow-400 hover:text-yellow-500 transition transform hover:scale-110"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-green-300 hover:text-green-400 transition transform hover:scale-110"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-pink-400 hover:text-pink-500 transition transform hover:scale-110"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-100 hover:text-gray-200 transition transform hover:scale-110"
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
