import { HeroSectionWaves } from "../SVG";


export default function HeroSection() {
  return (
    <main className="w-full h-screen flex-col justify-center items-center bg-[#191B1D]">
      <TopSection />
      <BottomSection />
    </main>
  )
}



const TopSection = () => {
  return (
    <>
      <HeroSectionWaves className="-z-0 w-full h-[65vh] absolute -left-53 hidden sm:inline" />
      <div className="z-40 w-full h-[65vh] lg:flex justify-between items-center">
        <h1 className="text-7xl hidden xl:inline -rotate-90 absolute text-gray-500 font-bold -right-40 top-52">NEW SHACK</h1>
        <div className="w-fit uppercase md:pl-32 overflow-hidden">
          <h1 className="gradient-text font-semibold text-3xl sm:text-4xl md:text-[53px] w-fit pb-1">The next level</h1>
          <h1 className="gradient-text font-semibold text-3xl sm:text-4xl md:text-[53px] w-fit">of smart gadgets</h1>
          <p className="text-2xl pt-11 w-[600px]">A large collection of the best gadgets of global brands in one place for you</p>
          <img src="/macbook.png" 
            className="
              xl:w-[860px]
              lg:w-[660px]
              md:w-[530px]
              sm:w-[410px]
              w-[340px]
              xl:top-[5%]
              lg:top-[18%]
              z-80
              absolute
              right-0"/>
        </div>
      </div>
    </>
  )
}

const BottomSection = () => {
  return (
    <div className="w-full h-[50vh] bg-white">

    </div>
  )
}