import { CommentWaves } from "../SVG";
import { motion } from "framer-motion";

export default function CommentSection() {
  return (
    <section className="relative w-full h-[50vh] bg-[#191B1D]">
      <CommentWaves className="absolute inset-0 w-full h-full" />
      <div className="flex flex-col justify-center items-center">
        <h1 className=" font-bold text-xl sm:text-3xl uppercase mb-16 mt-60 z-30">
          What our customers say
        </h1>
          <ReviewCard
            name="Natalia Brando"
            avatar="/pp.png"
            product="Acer Swift 3"
            date="23/02/2021"
            review="I really love it! Laptop was delivered to Berlin in 2 days. I asked to bring it to my work. Excellent service."
            rating={5}
            onPrev={() => console.log("Previous clicked")}
            onNext={() => console.log("Next clicked")}
          />
      </div>
      <div className="w-[100vw] h-[50vh] bg-white z-0 absolute -bottom-[50vh] left-0"/>
    </section>
  )
}


interface ReviewCardProps {
  name: string;
  avatar: string;
  product: string;
  date: string;
  review: string;
  rating?: number; // Optional: default 5 stars
  onPrev?: () => void;
  onNext?: () => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  avatar,
  product,
  date,
  review,
  rating = 5,
  onPrev,
  onNext,
}) => {
  return (
    <div className="relative max-w-3xl w-full mx-auto rounded-2xl overflow-hidden shadow-xl shadow-black">

      <div
        className="absolute inset-0 z-0 pointer-events-none rounded-2xl
                   bg-gradient-to-b from-white/50 to-white/40 shadow-xl shadow-black"
        style={{
          // exact 12px blur (Tailwind has classes like backdrop-blur-lg,
          // but inline style ensures exact value and WebKit fallback)
          backdropFilter: "blur(9px)",
          WebkitBackdropFilter: "blur(9px)",
        }}
        aria-hidden
      />

      {/* CONTENT: animate only this wrapper (keeps background stable) */}
      <motion.div
        className="relative z-10 py-6 px-16 flex flex-col items-start gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {/* Profile row */}
        <div className="flex items-center gap-4 w-full">
          <img
            src={avatar}
            alt={name}
            className="w-14 h-14 rounded-full object-cover shadow-sm"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-black">{name}</h3>
            </div>

            {/* Stars */}
            <div className="flex mt-1">
              {Array.from({ length: rating }).map((_, i) => (
                <span key={i} className="text-yellow-500 text-base">★</span>
              ))}
            </div>
          </div>
        </div>

        {/* Product & Date */}
        <div className="text-sm text-black space-y-1">
          <p><span className="font-semibold">Product:</span> {product}</p>
          <p><span className="font-semibold">Date:</span> {date}</p>
        </div>

        {/* Review text */}
        <p className="text-gray-900 text-base leading-relaxed">
          {review}
        </p>

        {/* Nav arrows (kept as normal buttons) */}
        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-black hover:text-gray-900 z-20"
            aria-label="Previous"
          >
            «
          </button>
        )}
        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-black hover:text-gray-900 z-20"
            aria-label="Next"
          >
            »
          </button>
        )}
      </motion.div>
    </div>
  );
};
