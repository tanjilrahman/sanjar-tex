import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <img
              src="/logo.png"
              alt="Sanjar Tex & Expo"
              className="h-16 mb-6"
            />
            <p className="text-gray-400 mb-8 max-w-md">
              Sanjar Tex & Expo is your trusted partner in premium textile
              exports, delivering quality garments from Bangladesh to the world.
            </p>
            <div>
              <h4 className="text-white font-semibold mb-2">Contact Numbers</h4>
              <div className="text-gray-400 space-y-1">
                <p>Tel: +880 2333326623</p>
                <p>Fax: +880 2333326623</p>
                <p>Mobile: +880 1711481212</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products/ladies-woven"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Ladies Woven
                </Link>
              </li>
              <li>
                <Link
                  to="/products/sweater"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Sweater
                </Link>
              </li>
              <li>
                <Link
                  to="/products/wiping-rags"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Wiping Rags
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-semibold mb-2">
                  Chittagong Office
                </h4>
                <p className="text-gray-400">
                  Parabat Tower (4th Floor),
                  <br />
                  472, Sk. Mujib Road, Agrabad,
                  <br />
                  Chittagong, Bangladesh
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Dhaka Office</h4>
                <p className="text-gray-400">
                  S.R.Garden (4th Floor),
                  <br />
                  52, Naya Palton,
                  <br />
                  Dhaka-1000, Bangladesh
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2">Online</h4>
                <div className="text-gray-400 space-y-1">
                  <p>
                    <a
                      href="mailto:info@sanjartex.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors duration-300"
                    >
                      kmisuman@ffi-jsl.com
                    </a>
                  </p>
                  <p>WeChat: monjuffi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Sanjar Tex & Expo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
