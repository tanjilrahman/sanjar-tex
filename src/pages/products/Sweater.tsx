import { useState } from "react";
import sweaterData from "../../assets/products/sweater.json";
import ProductGallery from "../../components/ProductGallery";

interface Product {
  SL_NO: number;
  Style_No: string;
  Item: string;
  Fabrication: string;
  Construction: string;
  Size_Range?: string;
  image: string;
}

const Sweater = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#8B1F24] py-24">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[url('/images/sweater/image001.jpeg')] bg-cover bg-center opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold text-center text-white mb-6">
            Sweater Collection
          </h1>
          <p className="text-xl text-center text-gray-200 max-w-3xl mx-auto">
            Experience our premium range of sweaters, combining comfort with
            contemporary design
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
          <ProductGallery products={sweaterData} type="sweater" />
        </div>
      </section>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">{selectedProduct.Item}</h2>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img
                    src={`/src/assets/images/sweater/${selectedProduct.image}`}
                    alt={selectedProduct.Item}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">
                      Product Details
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <span className="text-gray-600">Style No:</span>
                        <span className="ml-2 font-medium">
                          {selectedProduct.Style_No}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Fabrication:</span>
                        <span className="ml-2 font-medium">
                          {selectedProduct.Fabrication}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Construction:</span>
                        <span className="ml-2 font-medium">
                          {selectedProduct.Construction}
                        </span>
                      </div>
                      {selectedProduct.Size_Range && (
                        <div>
                          <span className="text-gray-600">Size Range:</span>
                          <span className="ml-2 font-medium">
                            {selectedProduct.Size_Range}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">
                      Additional Information
                    </h3>
                    <p className="text-gray-600">
                      Contact us for detailed information about pricing, minimum
                      order quantities, and delivery timelines.
                    </p>
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

export default Sweater;
