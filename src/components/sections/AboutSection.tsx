import { motion } from "framer-motion";
import { useState } from "react";
import { AboutWaves } from "../SVG";


const AboutSection = () => {

  return (
    <div className="bg-white flex flex-col justify-start items-center">
      <ProductCarousel products={products} />
      <div className="mt-[340px] md:mt-20 w-full md:w-[80vw] bg-[#191B1D] md:rounded-4xl ">
        <About />
      </div>
    </div>
  );
};



const About = () => {
  return (
    <section className="relative rounded-3xl flex items-center justify-center py-7 sm:py-20 px-4 sm:px-8 lg:px-16 h-full overflow-hidden">
        <AboutWaves className="sm:rounded-3xl hidden sm:inline absolute -z-0 inset-0 h-full" />
      <div className="relative  w-full rounded-3xl p-8 sm:p-12 shadow-lg bg-transparent z-10">
        {/* Optional decorative background */}

        <div className="relative z-10 text-center space-y-10">
          {/* Heading */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              WHY US?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Our values and philosophy
            </p>
          </div>

          {/* Features */}
          <div className="space-y-8 text-left">
            <Feature
              title="WE CARE"
              text="We care about our work. We care about doing a good job. We care about customers. We care about the environment and society. We are not ‘just doing our job’ — we care about the product you receive and the experience you will have."
            />
            <div className="space-y-8 text-left hidden md:inline">
              <Feature
                title="WE PROVIDE THE BEST QUALITY"
                text="Here you will find products of the best brands in gadgets world. Moreover, if you are not satisfied with the quality of a product, we are always here to help you."
              />
              <Feature
                title="WE PROMOTE THE COMFORT"
                text="We deliver all products to provide the most comfortable service. You can order a delivery to home, office, garage, garden, island... wherever you need."
              />
              <Feature
                title="WE LEARN"
                text="We always grow and learn new things. We have a special blog about news from the tech world. Subscribe to receive news and articles which our specialists recommend to read to keep up with the fast-growing world of tech."
              />
            </div>
          </div>

          {/* Subscribe Button */}
          <button className=" hidden md:inline relative px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white font-medium hover:scale-105 transition-transform">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ title, text }: { title: string; text: string }) => (
  <div className="space-y-2">
    <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{text}</p>
  </div>
);





export default AboutSection


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





function ProductCarousel({ products }: { products: Products }) {
  const [index, setIndex] = useState(1);

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? "text-black" : "text-gray-400"}`}>
        ★
      </span>
    ));

  return (
    <div className="w-[120vw] md:w-[100vw] flex flex-col items-center ml-[1vw] md:ml-[13.5vw] -mt-[70px]">
      {/* DESKTOP / TABLET */}
      <div className="hidden sm:grid grid-cols-3 gap-6 max-w-6xl mx-auto z-10">
        {products.map((p) => (
          <div
            key={p.id}
            className="relative w-[21vw] h-[290px] md:h-[320px] lg:h-[360px] rounded-3xl overflow-hidden backdrop-blur-xl bg-gray-300/50 "
          >
            <div className="flex flex-col p-6 h-full justify-between">
              <div className="flex justify-center items-center bg-gray-700/30 h-32 rounded-xl">
                <img src={p.image} alt={p.title} className="h-32 object-contain" />
              </div>
              <div>
                <h3 className=" text-sm lg:text-lg font-medium text-black">{p.title}</h3>
                <div className="flex items-center gap-2 text-[11px] lg:text-sm">
                  {p.oldPrice && <span className="line-through text-red-600">{p.oldPrice}$</span>}
                  <span className="text-black font-semibold ">{p.price}$</span>
                </div>
              </div>
              <div className="flex gap-1">{renderStars(p.rating)}</div>
              <div className="flex gap-2">
                {p.colors.map((c, i) => (
                  <span key={i} className={`w-5 h-5 rounded-md border border-gray-300 ${c}`} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE CAROUSEL */}
      <div className="sm:hidden w-full max-w-sm z-10 absolute  left-1/2 transform -translate-x-1/2">
        <motion.div
          className="flex"
          animate={{ x: `-${index * 33}vw` }} // move by fixed width
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          {products.map((p, i) => (
            <div key={i} className="shrink-0 w-[210px] mx-2">
              <div className="h-[300px] rounded-2xl overflow-hidden backdrop-blur-md bg-white/30 shadow-md  p-5 flex flex-col justify-between">
                <div className="flex justify-center items-center bg-gray-700/20 h-28 rounded-xl">
                  <img src={p.image} alt={p.title} className="h-28 object-contain" />
                </div>
                <div>
                  <h3 className="text-base font-medium line-clamp-2 text-black">{p.title}</h3>
                  <div className="flex items-center gap-2">
                    {p.oldPrice && <span className="text-xs line-through text-red-600">{p.oldPrice}$</span>}
                    <span className="font-semibold text-sm">{p.price}$</span>
                  </div>
                </div>
                <div className="flex gap-1">{renderStars(p.rating)}</div>
                <div className="flex gap-2">
                  {p.colors.map((c, i) => (
                    <span key={i} className={`w-4 h-4 rounded-md border border-gray-300 ${c}`} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-3">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === index ? "bg-gray-800 scale-110" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
