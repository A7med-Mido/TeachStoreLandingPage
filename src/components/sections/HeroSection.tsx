import { HeroSectionWaves } from "../SVG";


export default function HeroSection() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <HeroSectionWaves className="-z-10 w-full h-full absolute" />
      <TopSection />
    </main>
  )
}



const TopSection = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex-col justify-end items-end">
        <h1 className="gradient-text text-6xl sm:text-8xl">The next level</h1>
        <h1 className="gradient-text text-6xl sm:text-8xl">of smart gadgets</h1>
      </div>
      <p></p>
    </div>
  )
}