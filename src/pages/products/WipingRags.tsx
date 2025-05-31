import wipingRagsData from "../../assets/products/wiping-rags.json";

const WipingRags = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#8B1F24] py-24">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[url('/images/wiping-rags/image.png')] bg-cover bg-center opacity-15"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold text-center text-white mb-6">
            Wiping Rags Collection
          </h1>
          <p className="text-xl text-center text-gray-200 max-w-3xl mx-auto">
            Premium quality cotton wiping rags for industrial and commercial use
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-24 text-gray-50"
            viewBox="0 0 1440 74"
            fill="currentColor"
            preserveAspectRatio="none"
            style={{ display: "block", width: "100%" }}
          >
            <path d="M0,0 C280,74 720,74 1440,0 L1440,74 L0,74 Z" />
          </svg>
        </div>
      </section>

      {/* Product Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <img
                  src="/images/wiping-rags/image.png"
                  alt="Wiping Rags"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              {/* Size and Packing Information */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">
                  Size & Packing Options
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-[#8B1F24] mb-2">
                      Large Size (30cm - 50cm)
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>
                        5kgs in a poly bag and 40kgs in an exportable bale
                      </li>
                      <li>
                        1kgs in a poly bag and 20kgs in an exportable bale
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#8B1F24] mb-2">
                      Small Size (20cm - 28cm)
                    </h3>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>
                        5kgs in a poly bag and 40kgs in an exportable bale
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Available Products */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Available Products</h2>
                <div className="space-y-4">
                  {wipingRagsData.map((product) => (
                    <div
                      key={product.id}
                      className="p-4 border border-gray-200 rounded-lg hover:border-[#8B1F24] transition-colors duration-300"
                    >
                      <h3 className="font-semibold text-gray-900">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mt-2">
                        {product.description}
                      </p>
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {Object.entries(product.specifications).map(
                          ([key, value]) => (
                            <div key={key} className="text-sm">
                              <span className="text-gray-500 capitalize">
                                {key.replace("_", " ")}:
                              </span>{" "}
                              <span className="text-gray-900">{value}</span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WipingRags;
