import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div
              className={`${
                isScrolled || isMobileMenuOpen
                  ? "bg-gray-400 p-2 rounded-lg"
                  : "bg-transparent p-2 rounded-lg"
              }`}
            >
              <img src="/logo.png" alt="Sanjar Tex & Expo" className="h-12" />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors duration-300 ${
                isScrolled || isMobileMenuOpen
                  ? "text-gray-700 hover:text-[#8B1F24]"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Home
            </Link>
            <Link
              to="/products/ladies-woven"
              className={`font-medium transition-colors duration-300 ${
                isScrolled || isMobileMenuOpen
                  ? "text-gray-700 hover:text-[#8B1F24]"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Ladies Woven
            </Link>
            <Link
              to="/products/sweater"
              className={`font-medium transition-colors duration-300 ${
                isScrolled || isMobileMenuOpen
                  ? "text-gray-700 hover:text-[#8B1F24]"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Sweater
            </Link>
            <Link
              to="/products/wiping-rags"
              className={`font-medium transition-colors duration-300 ${
                isScrolled || isMobileMenuOpen
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
          <button
            onClick={toggleMobileMenu}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled || isMobileMenuOpen ? "text-gray-700" : "text-white"
            }`}
          >
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
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="py-4 space-y-4">
            <Link
              to="/"
              className={`block font-medium transition-colors duration-300 ${
                isScrolled || isMobileMenuOpen
                  ? "text-gray-700 hover:text-[#8B1F24]"
                  : "text-white hover:text-gray-200"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products/ladies-woven"
              className={`block font-medium transition-colors duration-300 ${
                isScrolled || isMobileMenuOpen
                  ? "text-gray-700 hover:text-[#8B1F24]"
                  : "text-white hover:text-gray-200"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ladies Woven
            </Link>
            <Link
              to="/products/sweater"
              className={`block font-medium transition-colors duration-300 ${
                isScrolled || isMobileMenuOpen
                  ? "text-gray-700 hover:text-[#8B1F24]"
                  : "text-white hover:text-gray-200"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sweater
            </Link>
            <Link
              to="/products/wiping-rags"
              className={`block font-medium transition-colors duration-300 ${
                isScrolled || isMobileMenuOpen
                  ? "text-gray-700 hover:text-[#8B1F24]"
                  : "text-white hover:text-gray-200"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Wiping Rags
            </Link>
            <Link
              to="/contact"
              className="inline-block px-6 py-2 bg-[#8B1F24] text-white rounded-full font-medium hover:bg-[#721A1E] transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
