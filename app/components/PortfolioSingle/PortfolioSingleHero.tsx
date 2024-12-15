// app/components/Portfolio/PortfolioSingleHero.tsx
import Image from 'next/image';
import {
  Breadcrumbs,
  type BreadcrumbItem,
} from '@/app/components/layout/Breadcrumbs';

interface PortfolioSingleHeroProps {
  title: string;
  heroImage: string;
  breadcrumbs: BreadcrumbItem[];
  imageAlt?: string;
}

export const PortfolioSingleHero = ({
  title,
  heroImage,
  breadcrumbs,
  imageAlt = 'Portfolio hero image',
}: PortfolioSingleHeroProps) => {
  return (
    <section className="relative flex justify-center items-center h-[calc(100vh-200px)]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-brand opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
        <Breadcrumbs items={breadcrumbs} variant="light" className="mb-5" />

        <h1
          className="text-center text-[180px] font-bold text-white leading-[0.8] text-shadow-lg
          transition-all duration-200 ease-in-out
          2xl:text-[180px] xl:text-[124px] lg:text-[90px] md:text-[70px] sm:text-[40px]"
        >
          {title}
        </h1>
      </div>
    </section>
  );
};
