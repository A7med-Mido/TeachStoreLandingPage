import { ProductWaves } from "../SVG";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";


const products = [
  {
    id: 1,
    title: "Beats Solo3 Wireless Headphones",
    price: 213,
    oldPrice: 300,
    rating: 5,
    colors: ["bg-gray-800", "bg-white", "bg-orange-500", "bg-red-600"],
    image: "/solo3.png",
  },
  {
    id: 2,
    title: "Airpods Max",
    price: 400,
    oldPrice: 479.3,
    rating: 4,
    colors: ["bg-gray-300", "bg-blue-300", "bg-gray-400", "bg-green-200"],
    image: "/airpods-max.png",
  },
  {
    id: 3,
    title: "Logitech G733 Gaming Headphone",
    price: 173.9,
    oldPrice: 243.3,
    rating: 5,
    colors: ["bg-black", "bg-purple-700", "bg-orange-400"],
    image: "/logitech.png",
  },
];

type Products = typeof products

export default function ProductSection() {
  return (
    <div className="relative overflow-x-hidden overflow-clip w-full bg-[#191B1D] flex ">
      {/* Background Waves */}
      <ProductWaves className="absolute inset-0 w-full z-0" />
      <h1 className="hidden xl:inline absolute -left-40 top-1/2 -translate-y-1/2 -rotate-90 text-[#3A3B3B] text-[80px] font-bold ">
        NEW SHACK
      </h1>
      {/* Foreground Content */}
      <img src="/npc.png" className="sm:w-[47%] w-[80%] h-fit z-10 relative -left-14 sm:-left-10 pt-20 sm:pt-12" alt="Product" />
      <div className="relative z-10 flex justify-center items-center ">
        <ProductCarousel products={products} />
      </div>
    </div>
  );
};






function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    listener();
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export function ProductCarousel({ products }: { products: Products }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [index, setIndex] = useState(0);
  const total = products.length;
  const translatePercent = (index * 100) / total;

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(total - 1, i + 1));

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-xl ${i < rating ? "text-black" : "text-gray-400"}`}>
        ★
      </span>
    ));

  // DESKTOP / TABLET GRID VIEW
  if (!isMobile) {
    return (
      <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto relative right-20 top-40">
        {products.map((p) => (
          <div
            key={p.id}
            className="relative w-[240px] h-[340px] lg:w-[255px] rounded-3xl overflow-hidden"
          >
            {/* 🔥 Blur Layer */}
            <div className="absolute inset-0 blur bg-[#7b7b7b] z-0" />

            {/* Actual Card Content */}
            <div className="relative z-10 flex flex-col justify-between p-8  ">
              {/* Image */}
              <div className="flex justify-center items-center bg-gray-700/60 h-28">
                <img src={p.image} alt={p.title} className="h-56 w-56 object-contain" />
              </div>

              {/* Text & Price */}
              <div className="pt-10">
                <h3 className="text-lg font-medium text-black">{p.title}</h3>
                <div className="flex items-center gap-2">
                  {p.oldPrice && (
                    <span className="text-red-600 line-through text-sm">{p.oldPrice}$</span>
                  )}
                  <span className="text-black font-semibold">{p.price}$</span>
                </div>
              </div>

              {/* Stars & Colors */}
              <div className="flex gap-1">{renderStars(p.rating)}</div>
              <div className="flex gap-2">
                {p.colors.map((c, i) => (
                  <span
                    key={i}
                    className={`w-5 h-5 rounded-md border border-gray-300 ${c}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // MOBILE CAROUSEL VIEW
  return (
    <div className="w-full max-w-[400px] mx-auto">
      <div className="relative overflow-hidden">
        {/* Track */}
        <motion.div
          className="flex"
          animate={{ x: `-${translatePercent}%` }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          style={{ width: `${total * 100}%` }}
        >
          {products.map((p) => (
            <div key={p.id} className="p-4" style={{ width: `${100 / total}%` }}>
              <div className="relative h-[400px] w-[285px] rounded-3xl overflow-hidden">
                {/* 🔥 Blur Layer */}
                <div className="absolute inset-0 blur bg-gray-200/30 z-0" />

                {/* Actual Card Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8">
                  {/* Image */}
                  <div className="flex justify-center items-center bg-gray-700/60 h-36">
                    <img src={p.image} alt={p.title} className="h-56 w-56 object-contain" />
                  </div>

                  {/* Text & Price */}
                  <div>
                    <h3 className="text-lg font-medium text-black">{p.title}</h3>
                    <div className="flex items-center gap-2">
                      {p.oldPrice && (
                        <span className="text-red-600 line-through text-sm">{p.oldPrice}$</span>
                      )}
                      <span className="text-black font-semibold">{p.price}$</span>
                    </div>
                  </div>

                  {/* Stars & Colors */}
                  <div className="flex gap-1">{renderStars(p.rating)}</div>
                  <div className="flex gap-2">
                    {p.colors.map((c, i) => (
                      <span
                        key={i}
                        className={`w-5 h-5 rounded-md border border-gray-300 ${c}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Arrows */}
        <button
          onClick={prev}
          disabled={index === 0}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow disabled:opacity-40"
        >
          ◀
        </button>
        <button
          onClick={next}
          disabled={index === total - 1}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow disabled:opacity-40"
        >
          ▶
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-gray-800" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}

