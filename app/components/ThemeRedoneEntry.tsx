import { LogoThemeRedone } from './SVG/LogoThemeRedone';
import { ThemeRedoneDecoration } from './SVG/ThemeRedoneDecoration';

export const ThemeRedoneEntry = () => {
  return (
    <section className="relative overflow-hidden bg-[#e6f3fb] py-[120px] px-[15px] flex flex-col items-center md:py-20">
      <LogoThemeRedone />

      <p className="text-[24px] leading-[1.44] text-center text-[rgba(0,0,0,0.84)] mb-9 max-w-[644px] md:text-[21px] md:mb-8 sm:text-[19px] sm:mb-6">
        We have developed and open-sourced a WordPress starter theme for
        creating state-of-the-art Gutenberg blocks based websites with an
        intuitive and fast workflow.
      </p>

      <div className="inline-flex">
        <a
          href="/theme-redone/"
          className="bg-white flex items-center rounded px-[30px] py-[7px] min-h-[48px] text-[15px] leading-none text-[#1e2a42] shadow-[0px_4px_4px_rgba(0,0,0,0.09)] text-center hover:bg-[#1e2a42] hover:text-white transition-colors duration-200"
        >
          Learn more about Theme Redone
        </a>
      </div>

      <ThemeRedoneDecoration />
    </section>
  );
};
