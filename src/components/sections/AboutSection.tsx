import { motion } from "framer-motion";
import { useState } from "react";
import { AboutWaves } from "../SVG";



const AboutSection = () => {
  return (
    <div className="bg-white flex flex-col justify-start items-center overflow-x-clip">
      <ProductCarousel products={products} />
      <div className="mt-[40px] sm:mt-20 w-full md:w-[80vw] bg-[#191B1D] md:rounded-4xl ">
        <About />
      </div>
        <BlogSection />
    </div>
  );
};

const features = [
  {
    title: "WE CARE",
    text: "We care about our work. We care about doing a good job. We care about customers. We care about the environment and society. We are not ‘just doing our job’ — we care about the product you receive and the experience you will have.",
  },
  {
    title: "WE PROVIDE THE BEST QUALITY",
    text: "Here you will find products of the best brands in gadgets world. Moreover, if you are not satisfied with the quality of a product, we are always here to help you.",
  },
  {
    title: "WE PROMOTE THE COMFORT",
    text: "We deliver all products to provide the most comfortable service. You can order a delivery to home, office, garage, garden, island... wherever you need.",
  },
  {
    title: "WE LEARN",
    text: "We always grow and learn new things. We have a special blog about news from the tech world. Subscribe to receive news and articles which our specialists recommend to read to keep up with the fast-growing world of tech.",
  },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % features.length);
  const prev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? features.length - 1 : prev - 1
    );

  return (
    <section className="relative rounded-3xl flex items-center justify-center py-7 sm:py-20 px-4 sm:px-8 lg:px-16 h-full overflow-hidden">
      <AboutWaves className="sm:rounded-3xl hidden sm:inline absolute -z-0 inset-0 h-full" />
      <div className="relative w-full rounded-3xl p-8 sm:p-12 bg-transparent z-10">
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
          {/* Mobile: Carousel */}
          <div className="sm:hidden relative">
            <motion.div
              key={currentIndex}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Feature {...features[currentIndex]} />
            </motion.div>

            {/* Carousel Controls */}
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={prev}
                className="p-2 text-white hover:scale-110 transition-transform"
              >
                ◀
              </button>
              <div className="flex gap-2">
                {features.map((_, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentIndex ? "bg-white" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-2 text-white hover:scale-110 transition-transform"
              >
                ▶
              </button>
            </div>
          </div>

          {/* Desktop: Stacked */}
          <div className="hidden sm:block space-y-8 text-left">
            {features.map((f, i) => (
              <Feature key={i} {...f} />
            ))}
          </div>

          {/* Subscribe Button */}
          <button className="hidden md:inline relative px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white font-medium hover:scale-105 transition-transform">
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
    <div className="w-full overflow-x-clip flex flex-col items-center -mt-[70px] lg:-mt-[130px]">
      {/* DESKTOP / TABLET */}
      <div className="hidden sm:grid grid-cols-3 gap-6 max-w-[90vw] mx-auto">
        {products.map((p) => (
          <div
            key={p.id}
            className="relative w-[300px] h-[320px] sm:w-[200px] sm:h-[320px] lg:w-[320px]  lg:h-[360px] rounded-3xl overflow-hidden backdrop-blur-xl bg-gray-300/50"
          >
            <div className="flex flex-col p-6 h-full justify-between">
              <div className="flex justify-center items-center bg-gray-700/30 h-32 rounded-xl">
                <img src={p.image} alt={p.title} className="h-32 object-contain" />
              </div>
              <div>
                <h3 className="text-sm lg:text-lg font-medium text-black">{p.title}</h3>
                <div className="flex items-center gap-2 text-[11px] lg:text-sm">
                  {p.oldPrice && <span className="line-through text-red-600">{p.oldPrice}$</span>}
                  <span className="text-black font-semibold">{p.price}$</span>
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
      <div className="sm:hidden w-full max-w-screen relative overflow-scroll">
        <motion.div
          className="flex justify-center items-center"
          animate={{ x: `-${index * 3}vw` }} // moves fixed card width
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          {products.map((p, i) => (
            <div key={i} className="shrink-0 w-[210px] mx-3">
              <div className="h-[300px] rounded-2xl overflow-hidden backdrop-blur-md bg-white/30 shadow-md p-5 flex flex-col justify-between">
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







const BlogCard: React.FC<{ blog: Blog; index: number }> = ({ blog, index }) => {
  return (
    <div
      className="
        relative rounded-xl overflow-hidden
        min-w-[50%] sm:min-w-[300px] md:min-w-0
        h-[350px] snap-center
        shadow-lg hover:shadow-xl transition-all duration-300 shadow-black/30
        z-20
      "
    >
      {/* STATIC overlay / frosted background — DO NOT animate this element */}
      <div
        className="absolute inset-0 z-0 pointer-events-none rounded-xl"
        style={{
          // visible semi-transparent fallback + backdrop blur
          background:
            "linear-gradient(180deg, rgba(17,24,39,0.35) 0%, rgba(17,24,39,0.25) 100%)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
        aria-hidden
      />

      {/* Image section */}
      <div className="relative w-full h-32 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* CONTENT: animate only this wrapper (keeps overlay stable) */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.24 }}
        transition={{ delay: index * 0.06, duration: 0.45, ease: "easeOut" }}
        className="relative z-10 p-4 flex flex-col justify-between h-1/2"
      >
        <p className="text-gray-200 text-sm">{blog.date}</p>
        <h3 className="text-white text-base font-semibold mt-2 line-clamp-3">
          {blog.title}
        </h3>
        <button className="text-gray-200 text-sm mt-3 self-start bg-transparent">
          Read more
        </button>
      </motion.div>
    </div>
  );
};

const BlogSection: React.FC = () => {
  return (
    <section className="py-12 relative">
      {/* Section Header */}
      <div className="text-center mb-10 text-black">
        <h2 className="text-2xl md:text-3xl font-bold">OUR BLOG</h2>
        <p className="text-gray-600">Read the latest news and articles</p>
      </div>

      {/* Blog List */}
      <div className="overflow-x-auto md:overflow-visible no-scrollbar">
        <div
          className="
            flex md:grid md:grid-cols-4 gap-6 px-10 md:px-12
            snap-x snap-mandatory md:snap-none relative left-10 sm:left-0
          "
        >
          {blogs.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>
      </div>

      {/* Read More Button */}
      <div className="w-full flex justify-center items-center pt-28 absolute z-20">
        <div className="bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 p-1 rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 w-fit">
          <button className="bg-gray-900 text-white px-10 py-3 rounded-full text-base font-normal hover:bg-gray-800 transition-colors">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};

type Blog = {
  id: string | number;
  title: string;
  date: string;
  image: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    date: "Jun, 12, 2021",
    title: "Tech companies don’t get science fiction – and that's deeply troubling",
    image: "/apple-vision.png",
  },
  {
    id: 2,
    date: "Jun, 12, 2021",
    title: "These are the games to look out for in 2022",
    image: "/game-arm.png",
  },
  {
    id: 3,
    date: "Jun, 10, 2021",
    title: "Why Apple's crackdown on child abuse images is no easy decision",
    image: "/npc-random.png",
  },
  {
    id: 4,
    date: "Jun, 10, 2021",
    title: "The truth about the suspected link between social media and self-harm",
    image: "/apps.png",
  },
];



