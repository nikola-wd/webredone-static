// components/ContactCTA/ContactCTA.tsx
import type { CSSProperties } from 'react';
import { Button } from '../Button/Button';

export const ContactCTA = () => {
  return (
    <section className="relative flex justify-center items-center z-[1] p-10 md:p-[40px] max-sm:p-[15px] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.12)]">
      <div className="relative min-w-full bg-secondary py-[90px] px-[50px] overflow-hidden max-sm:py-10 max-sm:px-5 text-center">
        {/* Dots Pattern */}
        <div
          className="absolute w-[484px] h-[484px] -left-20 top-20 opacity-30 rotate-[30deg] bg-repeat bg-[length:20px_20px] bg-dots-light
          md:w-[57.36vw] md:h-[57.36vw] md:-left-[10.43vw]
          max-[660px]:w-[48vw] max-[660px]:h-[48vw]"
        />
        <div
          className="absolute w-[484px] h-[484px] -right-[200px] bottom-10 opacity-30 rotate-[-60deg] scale-[0.7] bg-repeat bg-[length:20px_20px] bg-dots-light
          md:w-[57.36vw] md:h-[57.36vw] md:-right-[26.07vw]
          max-[660px]:w-[48vw] max-[660px]:h-[48vw]"
        />

        {/* Content */}
        <h3
          className="relative z-[1] text-white"
          style={{ '--duration': '0.9s' } as CSSProperties}
        >
          Have a project or partnership in mind?
        </h3>

        <Button
          href="/contact-us"
          theme="cta"
          className="relative z-[1] mt-9 md:mt-6 max-sm:mt-6 w-[320px] md:w-[280px] max-sm:w-[280px] max-sm:max-w-full h-[60px] md:h-[50px] max-sm:h-[50px] 
            rounded-[15px] md:rounded-[10px] max-sm:rounded-[10px]
            text-[20px] md:text-[19px] max-sm:text-[19px]"
          style={{ '--duration': '0.9s' } as CSSProperties}
        >
          Let's talk
        </Button>
      </div>
    </section>
  );
};
