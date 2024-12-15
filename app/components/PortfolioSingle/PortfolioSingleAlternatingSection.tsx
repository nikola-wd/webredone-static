// app/components/PortfolioSingle/PortfolioSingleAlternatingSection.tsx
import type { PortfolioImage } from '@/app/(pages)/portfolio/[slug]/page';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface PortfolioSingleAlternatingSectionProps {
  title: string;
  text: string;
  image: PortfolioImage;
  isAlternate?: boolean;
  className?: string;
}

const mdxComponents = {
  strong: (props: any) => (
    <strong className="font-bold text-[#162838]" {...props} />
  ),
  p: (props: any) => (
    <p
      className="text-[21px] text-[#666] lg:text-[20px] md:text-[17px] [&:not(:last-of-type)]:mb-11"
      {...props}
    />
  ),
};

export const PortfolioSingleAlternatingSection = ({
  title,
  text,
  image,
  isAlternate = false,
  className = '',
}: PortfolioSingleAlternatingSectionProps) => {
  return (
    <section className={`casestudy-block min-h-screen py-20 ${className}`}>
      <div className="container mx-auto px-20 lg:px-[80px] md:px-[50px] sm:px-5">
        <div
          className={`flex flex-col lg:flex-row items-start ${
            !isAlternate ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Text Content */}
          <div
            className={`casestudy-block__txt max-w-[600px] lg:w-1/2 mx-auto
            px-0 py-[60px] 
            ${isAlternate ? 'lg:pr-[60px]' : 'lg:pl-[60px]'}`}
          >
            <h2
              className="text-[64px] font-bold text-[#234059] mb-12 leading-[1.05]
              2xl:text-[64px] xl:text-[50px] lg:text-[34px] md:text-[30px] sm:text-[26px]"
            >
              {title}
            </h2>
            <div className="prose prose-lg max-w-none">
              <MDXRemote source={text} components={mdxComponents} />
            </div>
          </div>

          {/* Single Image */}
          <div className="lg:w-1/2">
            <div className="relative w-full max-w-[857px] shadow-[0_0_50px_rgba(0,0,0,0.17)]">
              <Image
                src={image.url}
                alt={image.alt}
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 857px"
                className="w-full h-auto"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
