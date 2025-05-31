import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductGallery from "../components/ProductGallery";
import ladiesWovenData from "../assets/products/ladies-woven.json";
import sweaterData from "../assets/products/sweater.json";

const Home = () => {
  // Get featured products (first 4 from each category)
  const featuredLadiesWoven = ladiesWovenData.slice(0, 4);
  const featuredSweaters = sweaterData.slice(0, 4);

  const heroImages = [
    "/src/assets/images/sweater/image001.jpeg",
    "/src/assets/images/ladies-woven/image001.png",
    "/src/assets/images/sweater/image008.jpeg",
    "/src/assets/images/ladies-woven/image006.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-[#8B1F24] to-[#2C0B0D] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-20" : "opacity-0"
              }`}
            >
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-[10000ms] ease-linear"
                style={{
                  backgroundImage: `url(${image})`,
                  transform:
                    index === currentImageIndex ? "scale(1.1)" : "scale(1)",
                }}
              ></div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-white w-4"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              onClick={() => setCurrentImageIndex(index)}
            ></button>
          ))}
        </div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center max-w-4xl">
            <img
              src="/src/assets/logo.png"
              alt="Sanjar Tex & Expo"
              className="h-44 mx-auto mb-8"
            />
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Your Global Textile <br />
              Export Partner
            </h1>
            <p className="text-xl mb-12 text-gray-200">
              Connecting quality Bangladesh textiles with international markets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products/ladies-woven"
                className="px-8 py-4 bg-white text-[#8B1F24] rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Explore Ladies Woven
              </Link>
              <Link
                to="/products/sweater"
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#8B1F24] transition-all duration-300 transform hover:scale-105"
              >
                View Sweater Collection
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-24 text-white"
            viewBox="0 0 1440 74"
            fill="currentColor"
            preserveAspectRatio="none"
            style={{ display: "block", width: "100%" }}
          >
            <path d="M0,0 C280,74 720,74 1440,0 L1440,74 L0,74 Z" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            Why Choose <span className="text-[#8B1F24]">Sanjar Tex & Expo</span>
            ?
          </h2>
          <p className="text-lg text-center mb-16 text-gray-600 max-w-4xl mx-auto">
            We are a{" "}
            <span className="text-[#8B1F24] font-bold">
              100% export-oriented
            </span>
            , well-reputed{" "}
            <span className="text-[#8B1F24] font-bold">
              ready-made garments
            </span>{" "}
            & <span className="text-[#8B1F24] font-bold">wiping rags</span>{" "}
            exporter, supplier, and sourcing agent based in Bangladesh. With
            years of experience, we specialize in providing high-quality apparel
            to international markets, ensuring timely delivery, and offering
            reliable sourcing solutions tailored to our clients' needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-[#8B1F24] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🌟</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Export Excellence
              </h3>
              <p className="text-gray-600">
                100% export-oriented operation with years of experience in
                international trade
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-[#8B1F24] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🌍</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Sourcing Solutions
              </h3>
              <p className="text-gray-600">
                Reliable sourcing agent providing tailored solutions for your
                specific needs
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-[#8B1F24] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">💯</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                Premium ready-made garments with guaranteed quality and timely
                delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Ladies Woven Products */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Featured <span className="text-[#8B1F24]">Ladies Woven</span>
              </h2>
              <p className="mt-2 text-gray-600 text-lg">
                Premium export-quality ladies woven garments
              </p>
            </div>
            <Link
              to="/products/ladies-woven"
              className="inline-flex items-center text-[#8B1F24] font-semibold hover:text-[#721A1E] transition-colors duration-300"
            >
              View All
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          <ProductGallery products={featuredLadiesWoven} type="ladies-woven" />
        </div>
      </section>

      {/* Featured Sweater Products */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Featured <span className="text-[#8B1F24]">Sweaters</span>
              </h2>
              <p className="mt-2 text-gray-600 text-lg">
                High-quality sweaters for international markets
              </p>
            </div>
            <Link
              to="/products/sweater"
              className="inline-flex items-center text-[#8B1F24] font-semibold hover:text-[#721A1E] transition-colors duration-300"
            >
              View All
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          <ProductGallery products={featuredSweaters} type="sweater" />
        </div>
      </section>

      {/* Wiping Rags Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Premium <span className="text-[#8B1F24]">Wiping Rags</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                High-quality cotton wiping rags for industrial and commercial
                applications. Available in various sizes and specifications to
                meet your specific requirements.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#8B1F24] bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-[#ffffff]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      100% Cotton Quality
                    </h3>
                    <p className="text-gray-600">
                      Made from premium white cotton hosiery smooth single
                      jersey fabric
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#8B1F24] bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Multiple Size Options
                    </h3>
                    <p className="text-gray-600">
                      Available in sizes ranging from 20cm to 50cm
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#8B1F24] bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-[#ffffff]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8 4-8-4m16 0l-8 4m8 4l-8 4m8-4l-8 4-8-4m8 4l8-4M4 7l8 4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Flexible Packaging
                    </h3>
                    <p className="text-gray-600">
                      Convenient packaging options from 1kg poly bags to 40kg
                      exportable bales
                    </p>
                  </div>
                </div>
              </div>
              <Link
                to="/products/wiping-rags"
                className="inline-flex items-center px-8 py-4 bg-[#8B1F24] text-white rounded-full font-semibold hover:bg-[#721A1E] transition-all duration-300 transform hover:scale-105"
              >
                Explore Wiping Rags
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/src/assets/images/wiping-rags/image.png"
                  alt="Wiping Rags"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#8B1F24] text-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold">6+</div>
                <div className="text-sm">
                  Product
                  <br />
                  Variants
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Our <span className="text-[#8B1F24]">Collections</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/src/assets/images/ladies-woven/image001.png"
                alt="Ladies Woven"
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Ladies Woven Collection
                </h3>
                <Link
                  to="/products/ladies-woven"
                  className="inline-block px-6 py-3 bg-white text-[#8B1F24] rounded-full font-semibold hover:bg-[#8B1F24] hover:text-white transition-all duration-300"
                >
                  Explore Collection →
                </Link>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/src/assets/images/sweater/image001.jpeg"
                alt="Sweater Collection"
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Sweater Collection
                </h3>
                <Link
                  to="/products/sweater"
                  className="inline-block px-6 py-3 bg-white text-[#8B1F24] rounded-full font-semibold hover:bg-[#8B1F24] hover:text-white transition-all duration-300"
                >
                  Explore Collection →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#8B1F24] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[url('/src/assets/images/sweater/image002.jpeg')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-white">
            Ready to Source Your Next Collection?
          </h2>
          <p className="text-xl mb-12 text-gray-200 max-w-2xl mx-auto">
            Let's discuss your requirements and create a tailored sourcing
            solution for your business
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-[#8B1F24] rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
