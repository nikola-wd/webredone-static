import { LogoBixLabs } from '../SVG/LogoBixLabs';
import { LogoDreamHost } from '../SVG/LogoDreamHost';
import { LogoPeemz } from '../SVG/LogoPeemz';
import { LogoSiliPint } from '../SVG/LogoSiliPint';

const brands = [
  { Icon: LogoDreamHost, id: 'dreamhost' },
  { Icon: LogoBixLabs, id: 'bixlabs' },
  { Icon: LogoSiliPint, id: 'silipint' },
  { Icon: LogoPeemz, id: 'peemz' },
];

export const HomeClients = () => {
  return (
    <section
      className="bg-main-gradient py-[120px] lg:py-20"
      aria-label="Homepage Feedback Section"
    >
      <div className="container">
        <div className="flex flex-wrap items-center">
          {brands.map(({ Icon, id }) => (
            <div
              key={id}
              className="w-1/4 md:w-1/2 max-sm:w-full md:[&:nth-child(n+3)]:mt-[30px] max-sm:not-last:mb-10"
            >
              <div className="flex justify-center">
                <Icon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
