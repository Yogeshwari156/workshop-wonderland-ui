
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold">WorkshopHub</span>
            </div>
            <p className="text-gray-400 text-sm">
              Discover and book amazing workshops to expand your skills and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/workshops" className="text-gray-400 hover:text-white transition-colors">All Workshops</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Design</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Development</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Business</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Art & Craft</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>hello@workshophub.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Learning Street<br />Education City, EC 12345</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 WorkshopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
