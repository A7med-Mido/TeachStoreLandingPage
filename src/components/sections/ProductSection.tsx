import { ProductWaves } from "../SVG";



export default function ProductSection() {
  return (
    <div>
      <div className="relative overflow-hidden pt-40 w-full h-fit top-32 ">
        {/* Background Waves */}
        <ProductWaves className="absolute inset-0 w-full  z-0" />

        {/* Foreground Content */}
        <div className="relative z-10 flex justify-start">
          <img src="/npc.png" className="w-[500px] h-fit relative left-20" alt="Product" />
          
        </div>
      </div>
    </div>
  );
};




