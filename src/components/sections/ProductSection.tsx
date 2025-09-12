import { ProductWaves } from "../SVG";



export default function ProductSection() {
  return (
    <div className="relative overflow-hidden w-full bg-[#191B1D]">
      {/* Background Waves */}
      <ProductWaves className="absolute inset-0 w-full z-0" />
      <h1 className="hidden xl:inline absolute -left-40 top-1/2 -translate-y-1/2 -rotate-90 text-[#3A3B3B] text-[80px] font-bold ">
        NEW SHACK
      </h1>
      {/* Foreground Content */}
      <img src="/npc.png" className="sm:w-[47%] w-[80%] h-fit z-10 relative -left-14 sm:left-8 pt-20 sm:pt-12" alt="Product" />
      <div className="relative z-10 flex justify-center items-center ">

      </div>
    </div>
  );
};




