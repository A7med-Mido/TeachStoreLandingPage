import { CommentWaves } from "../SVG";
import ReviewCard from "../Comment/ReviewCard";
import ContactSection from "../Comment/ContactSection";

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
      <div className="w-[100vw] h-[80vh] bg-white z-0 absolute -bottom-[80vh] left-0"/>
      <ContactSection />
    </section>
  )
}






