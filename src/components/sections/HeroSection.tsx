import { HeroSectionWaves } from "../SVG";

export default function HeroSection() {
  return (
    <main className="relative flex flex-col justify-center items-center w-full min-h-screen bg-[#191B1D]">
      <TopSection />
      <BottomSection />
    </main>
  );
}

const TopSection = () => {
  return (
    <section className="relative w-full h-[55vh] lg:h-[65vh] flex flex-col justify-center">
      <HeroSectionWaves className="absolute inset-0 w-full h-full z-10 hidden sm:inline" />
      <div className="relative z-10 flex flex-col lg:flex-row lg:justify-between justify-start items-center w-full h-full px-6 lg:pt-0 pt-16">
        <h1 className="hidden xl:block absolute -right-40 top-1/2 -translate-y-1/2 -rotate-90 text-[#3A3B3B] text-[80px] font-bold ">
          NEW SHACK
        </h1>
        <div className="flex md:pl-6 lg:pl-10 flex-col items-center lg:items-start uppercase">
          <h1 className="gradient-text font-semibold text-[39px] sm:text-5xl md:text-[58px]">
            The next level
          </h1>
          <h1 className="gradient-text font-semibold text-[39px] sm:text-5xl md:text-[58px]">
            of smart gadgets
          </h1>
          <p className="text-2xl pt-6 max-w-[600px] hidden lg:inline">
            A large collection of the best gadgets of global brands in one place for you
          </p>
        </div>
        <img
          src="/macbook.png"
          alt="Macbook showcasing gadgets"
          className="
            absolute top-44 sm:top-40 md:top-40 lg:top-32 xl:top-[5%]
            w-[500px] sm:w-[570px] md:w-[580px] lg:w-[710px] xl:w-[860px]
            lg:inset-[43%]
            right-1/2
            z-30
            translate-x-1/2 lg:translate-x-[69px] xl:translate-x-12
          "
        />
      </div>
    </section>
  );
};

const BottomSection = () => {
  return (
    <section className="w-full h-[50vh] bg-white text-black py-12">
      <ul className="
        grid 
        grid-cols-2 lg:grid-cols-4 
        gap-10 
        max-w-6xl mx-auto 
        text-center
      ">
        <StatCard number="10" label="Years of Experience" />
        <StatCard number="5k+" label="Products" />
        <StatCard number="59" label="Countries of Delivery" />
        <StatCard number="10k+" label="Reviews" />
      </ul>
    </section>
  );
};

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <li className="flex flex-col justify-center items-center gap-3">
    <h1 className="text-5xl font-extrabold">{number}</h1>
    <p className="text-lg md:text-xl text-gray-700">{label}</p>
  </li>
);

