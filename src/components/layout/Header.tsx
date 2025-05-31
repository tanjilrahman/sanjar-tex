import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div
              className={`${
                isScrolled
                  ? "bg-gray-400 p-2 rounded-lg"
                  : "bg-transparent p-2 rounded-lg"
              }`}
            >
              <img src="/logo.png" alt="Sanjar Tex & Expo" className="h-12" />
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:text-[#8B1F24]"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Home
            </Link>
            <Link
              to="/products/ladies-woven"
              className={`font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:text-[#8B1F24]"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Ladies Woven
            </Link>
            <Link
              to="/products/sweater"
              className={`font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:text-[#8B1F24]"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Sweater
            </Link>
            <Link
              to="/products/wiping-rags"
              className={`font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:text-[#8B1F24]"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Wiping Rags
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 bg-[#8B1F24] text-white rounded-full font-medium hover:bg-[#721A1E] transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
