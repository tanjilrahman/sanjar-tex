import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
  SL_NO: number;
  Item: string;
  image?: string;
  high_res_image?: string;
  low_res_image?: string;
  Style_No?: string;
  Fabrication: string;
  Construction?: string;
  Size_Range?: string;
  Print?: string;
  Embroidery?: string;
  Wash?: string;
  Delivery_Within?: string;
  Minimum_Order_Quantity?: string;
}

interface ProductGalleryProps {
  products: Product[];
  type: "ladies-woven" | "sweater";
}

const ProductGallery = ({ products, type }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const getImagePath = (product: Product, highRes: boolean = false) => {
    if (type === "ladies-woven") {
      return `/images/ladies-woven/${
        highRes ? product.high_res_image : product.low_res_image
      }`;
    }
    return `/images/sweater/${product.image}`;
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative">
      <motion.div
        className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {products.map((product) => (
          <motion.div
            key={product.SL_NO}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={item}
          >
            <div
              className="aspect-square overflow-hidden cursor-zoom-in"
              onClick={() => setSelectedImage(getImagePath(product, true))}
            >
              <img
                src={getImagePath(product)}
                alt={product.Item}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-3 sm:p-4 border-t border-gray-100">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 truncate">
                {product.Item}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-2">
                {product.Style_No || `Style: ${product.SL_NO}`}
              </p>
              <div className="space-y-1">
                <p className="text-xs sm:text-sm text-gray-600 flex items-center">
                  <span className="w-16 sm:w-20 text-gray-500">Fabric:</span>
                  <span className="truncate">{product.Fabrication}</span>
                </p>
                {product.Construction && (
                  <p className="text-xs sm:text-sm text-gray-600 flex items-center">
                    <span className="w-16 sm:w-20 text-gray-500">Build:</span>
                    <span className="truncate">{product.Construction}</span>
                  </p>
                )}
                {product.Size_Range && (
                  <p className="text-xs sm:text-sm text-gray-600 flex items-center">
                    <span className="w-16 sm:w-20 text-gray-500">Size:</span>
                    <span className="truncate">{product.Size_Range}</span>
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-xl p-2 hover:bg-white/10 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <motion.img
              src={selectedImage}
              alt="Product preview"
              className="max-w-full max-h-[90vh] object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductGallery;
