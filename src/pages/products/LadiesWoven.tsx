import { useState } from "react";
import ladiesWovenData from "../../assets/products/ladies-woven.json";
import ProductGallery from "../../components/ProductGallery";

interface Product {
  SL_NO: number;
  Item: string;
  Print: string;
  Embroidery: string;
  Size_Range: string;
  Wash: string;
  Delivery_Within: string;
  Minimum_Order_Quantity: string;
  Fabrication: string;
  Construction: string;
  high_res_image: string;
  low_res_image: string;
}

const LadiesWoven = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#8B1F24] py-24">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[url('/images/ladies-woven/image001.png')] bg-cover bg-center opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-4 sm:mb-6">
            Ladies Woven Collection
          </h1>
          <p className="text-lg sm:text-xl text-center text-gray-200 max-w-3xl mx-auto">
            Discover our extensive range of ladies woven garments, crafted with
            precision and style for the modern woman
          </p>
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

      {/* Product Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ProductGallery products={ladiesWovenData} type="ladies-woven" />
        </div>
      </section>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold pr-8">
                  {selectedProduct.Item}
                </h2>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                <div>
                  <img
                    src={`/images/ladies-woven/${selectedProduct.high_res_image}`}
                    alt={selectedProduct.Item}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                    <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                      Product Details
                    </h3>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex flex-wrap items-center">
                        <span className="text-gray-600 w-24">Style No:</span>
                        <span className="font-medium">
                          {selectedProduct.SL_NO}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center">
                        <span className="text-gray-600 w-24">Fabrication:</span>
                        <span className="font-medium">
                          {selectedProduct.Fabrication}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center">
                        <span className="text-gray-600 w-24">
                          Construction:
                        </span>
                        <span className="font-medium">
                          {selectedProduct.Construction}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center">
                        <span className="text-gray-600 w-24">Size Range:</span>
                        <span className="font-medium">
                          {selectedProduct.Size_Range}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                    <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                      Order Information
                    </h3>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex flex-wrap items-center">
                        <span className="text-gray-600 w-24">
                          Minimum Order:
                        </span>
                        <span className="font-medium">
                          {selectedProduct.Minimum_Order_Quantity}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center">
                        <span className="text-gray-600 w-24">Delivery:</span>
                        <span className="font-medium">
                          {selectedProduct.Delivery_Within}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center">
                        <span className="text-gray-600 w-24">Wash:</span>
                        <span className="font-medium">
                          {selectedProduct.Wash}
                        </span>
                      </div>
                      {selectedProduct.Embroidery !== "N/A" && (
                        <div className="flex flex-wrap items-center">
                          <span className="text-gray-600 w-24">
                            Embroidery:
                          </span>
                          <span className="font-medium">
                            {selectedProduct.Embroidery}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LadiesWoven;
