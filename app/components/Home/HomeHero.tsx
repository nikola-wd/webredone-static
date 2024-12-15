import { AnimatedCanvasGrid } from '../AnimatedCanvasGrid';
import { Button } from '../Button/Button';
import { IcnArrowRight } from '../SVG/IcnArrowRight';

export const HomeHero: React.FC = () => {
  return (
    <section
      className="relative bg-main-gradient overflow-hidden md:border-x-[15px] md:border-white"
      role="banner"
      aria-label="Homepage Hero Section"
    >
      <AnimatedCanvasGrid />
      <div className="flex items-center h-[500px] md:h-[700px] z-10 container mx-auto px-4">
        <div className="hero__content transform translate-y-5 pl-4 md:pl-[100px] text-white max-w-full md:max-w-3xl">
          <p className="m-0 text-[#bad5ee] text-[24px] md:text-[33px] tracking-[0.8px] mb-3 max-w-full md:max-w-[500px] leading-snug">
            We are a dedicated team of seasoned full-stack devs
          </p>
          <p className="hero-and mt-3 md:mt-5 mb-[16px] md:mb-[22px] text-[18px] md:text-[22px] opacity-90 uppercase text-white">
            and
          </p>
          <h1 className="text-[30px] md:text-[40px] lg:text-[56px] leading-[1.12] tracking-wide font-bold mb-8 md:mb-12 text-white max-w-[700px]">
            AN EXTENSION OF YOUR TEAM
          </h1>
          <Button
            href="/contact-us/"
            theme="secondary"
            className="group inline-flex items-center overflow-hidden relative pr-[60px] md:pr-[72px] pl-[40px] md:pl-[50px]"
          >
            let's partner up
            <IcnArrowRight
              width={26}
              height={26}
              className="absolute right-6 md:right-8 transition-all duration-200 ease-cubic-in-out group-hover:translate-x-[6px]"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};
