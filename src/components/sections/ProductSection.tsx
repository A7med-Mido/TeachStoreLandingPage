import { ProductWaves } from "../SVG";




export default function ProductSection() {
  return (
    <div className="relative overflow-x-hidden overflow-clip w-full bg-[#191B1D] flex sm:flex-row flex-col">
      {/* Background Waves */}
      <ProductWaves className="absolute inset-0 w-full z-0" />
      <div className="z-10 flex flex-col justify-center items-center gap-3 absolute">
        <p className="text-[18px] text-center px-12 pt-4 w-full inline sm:hidden">
          A large collection of the best gadgets of global brands in one place for you
        </p>
        <button className="rounded-[55px] gradient-bg text-white w-fit py-1 px-4 cursor-pointer text-[11px] inline sm:hidden">
          Shop online
        </button>
      </div>

      <h1 className="hidden xl:inline absolute -left-40 top-1/2 -translate-y-1/2 -rotate-90 text-[#3A3B3B] text-[80px] font-bold ">
        NEW SHACK
      </h1>
      

        <img src="/npc.png" className="sm:w-[50%] w-[80%] h-fit z-0 relative -left-24 sm:-left-16 pt-36 sm:pt-24" alt="Product" />
      <div className="z-10 absolute right-[10%] top-32 sm:w-[50vw] w-[210px] flex flex-col text-center md:items-start justify-center items-center ">
        <h1 className="text-4xl sm:text-[5vw] gradient-text font-bold uppercase  md:text-start">
          Move with the beat of yor life
        </h1>
        <span className="md:text-start w-40 sm:w-fit pt-2 md:text-xl lg:text-2xl break-words text-center">
          The big collection <br className="hidden sm:block" />of the best musical gadgets on sales
        <button className="rounded-[55px] gradient-bg text-white w-fit py-1.5 px-10 cursor-pointer text-lg hidden lg:inline right-[-1vw] absolute">
          More
        </button>
        </span>
        {/* <button className="gradient-bg px-5 py-2 rounded-4xl text-sm">
          More
        </button> */}
      </div>
    </div>
  );
};








