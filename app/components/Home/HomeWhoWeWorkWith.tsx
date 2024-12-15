'use client';

import Image from 'next/image';

export const HomeWhoWeWorkWith = () => {
  return (
    <section className="flex pt-[100px] pb-[200px] lg:pt-[60px] lg:pb-[120px] max-sm:flex-col max-sm:pb-[10px]">
      <div className="relative w-[500px] h-[600px] flex-shrink-0 lg:w-[300px] xl:w-[400px] max-sm:w-full max-sm:h-[400px]">
        <Image
          src="/img/webredone.com-who-we-work-with.webp"
          alt="webredone.com - who we work with image"
          fill
          priority
          className="object-cover"
        />
        <h2 className="sec-title absolute right-0 top-1/2 -translate-y-1/2 translate-x-[60%] max-w-[210px] text-[45px] text-secondary text-left leading-[1.1] lg:right-[130px] max-sm:right-1/2 max-sm:translate-x-1/2 max-sm:mb-0">
          <span className="relative inline-block z-[1]">
            <span>Who</span> <span>We</span> <span>Work</span> <span>With</span>
          </span>
        </h2>
      </div>

      <div className="flex flex-col justify-center items-start text-left px-[190px] py-[50px] xl:px-[170px] xl:py-[50px] lg:px-[50px] max-sm:px-[30px]">
        <h3 className="leading-[1.1] mb-5">
          <span className="block">We are all about</span>
          <span className="block">partnerships</span>
        </h3>
        <p className="max-w-[700px] mb-4">
          Focus on what you do the best: design, sales, marketing, management
          and let us handle what we are the best at.
          <br />
          By partnering up, we can deliver way more, and way better.
        </p>
        <p className="mb-4">
          <span className="mr-2">•</span> Full-Service agencies that need help
          with their overflow work.
        </p>
        <p className="mb-4">
          <span className="mr-2">•</span> Web Design studios in search of a
          reliable development partner.
        </p>
        <p className="mb-4">
          <span className="mr-2">•</span> Everyone else in need of a skilled and
          reliable web development team.
        </p>
      </div>
    </section>
  );
};
