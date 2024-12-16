import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-200">Smart Farming</h1>
            <p className="mt-2 text-gray-400 max-w-sm">
              Revolutionizing farming with technology, data analytics, and insights.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center space-y-4 md:items-start">
            <h3 className="text-lg font-semibold text-gray-300">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center space-y-4 md:items-start">
            <h3 className="text-lg font-semibold text-gray-300">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Farm St, Agriville</li>
              <li>Email: contact@yourdomain.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
           
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
