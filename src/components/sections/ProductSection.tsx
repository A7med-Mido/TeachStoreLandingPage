import { ProductWaves } from "../SVG";



export default function ProductSection() {
  return (
    <div className="relative overflow-hidden w-full  ">
      {/* Background Waves */}
      <ProductWaves className="absolute inset-0 w-full z-0" />

      {/* Foreground Content */}
        <img src="/npc.png" className="w-[43%] h-fit z-10 relative left-8 pt-12" alt="Product" />
      <div className="relative z-10 flex justify-center items-center ">
      </div>
    </div>
  );
};




