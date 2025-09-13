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
    <div className="relative overflow-x-hidden overflow-clip w-full bg-[#191B1D] flex sm:flex-row flex-col">
      {/* Background Waves */}
      <ProductWaves className="absolute inset-0 w-full z-0" />
        <p className="text-xl text-center px-12 pt-4 w-full inline sm:hidden">
          A large collection of the best gadgets of global brands in one place for you
        </p>
      <div className="z-10 ">

      </div>
      <h1 className="hidden xl:inline absolute -left-40 top-1/2 -translate-y-1/2 -rotate-90 text-[#3A3B3B] text-[80px] font-bold ">
        NEW SHACK
      </h1>
      

        <img src="/npc.png" className="sm:w-[47%] w-[80%] h-fit z-10 relative -left-24 sm:-left-10 pt-20 sm:pt-12" alt="Product" />
      <div className="z-10 absolute right-[10%] top-30 sm:w-[50vw] w-[280px] flex-col sm:items-start justify-center items-center ">
        <h1 className="text-5xl sm:text-[5vw] gradient-text font-bold uppercase  sm:text-start">
          Move with the beat of yor life
        </h1>
        <p className="text-center sm:text-start">
          The big collection of the best musical gadgets on sales
        </p>
        {/* <button className="gradient-bg px-5 py-2 rounded-4xl text-sm">
          More
        </button> */}
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

function ProductCarousel({ products }: { products: Products }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [index, setIndex] = useState(1);
  const total = products.length;
  const translatePercent = (index * 100) / total;

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
            className="relative h-[40vh] w-[18vw] rounded-3xl overflow-hidden"
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
        style={{ width: `${total * 80}%` }} // slightly wider track so cards are spaced nicely
      >
        {products.map((p) => (
          <div key={p.id} className="p-3 ml-[4vw]" style={{ width: `${100 / total}%` }}>
            <div className="relative h-[34vh] w-[65vw] rounded-2xl overflow-hidden">
              {/* 🔥 Blur Layer */}
              <div className="absolute inset-0 blur bg-gray-200/30 z-0" />

              {/* Actual Card Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-5">
                {/* Image */}
                <div className="flex justify-center items-center bg-gray-700/50 h-28 rounded-xl">
                  <img src={p.image} alt={p.title} className="h-44 w-44 object-contain" />
                </div>

                {/* Text & Price */}
                <div>
                  <h3 className="text-base font-medium text-black line-clamp-2">{p.title}</h3>
                  <div className="flex items-center gap-2">
                    {p.oldPrice && (
                      <span className="text-red-600 line-through text-xs">{p.oldPrice}$</span>
                    )}
                    <span className="text-black font-semibold text-sm">{p.price}$</span>
                  </div>
                </div>

                {/* Stars & Colors */}
                <div className="flex gap-1">{renderStars(p.rating)}</div>
                <div className="flex gap-2">
                  {p.colors.map((c, i) => (
                    <span
                      key={i}
                      className={`w-4 h-4 rounded-md border border-gray-300 ${c}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>

    {/* Dots */}
    <div className="flex justify-center gap-2 mt-3">
      {products.map((_, i) => (
        <button
          key={i}
          onClick={() => setIndex(i)}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
            i === index ? "bg-gray-800 scale-110" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  </div>
);
}

