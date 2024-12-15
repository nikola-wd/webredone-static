import Image from 'next/image';

export const HomeWhyWebredone = () => {
  return (
    <section className="relative mx-[50px] pt-[200px] pb-[200px] bg-no-repeat bg-center bg-cover xl:pt-[130px] xl:pb-[130px] md:mx-[10px] md:pt-[90px] md:pb-[90px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-main-gradient before:opacity-70">
      {/* Background Image */}
      <Image
        src="/img/why-webredone-wide-image.webp"
        alt="Why WebRedone background"
        fill
        priority
        className="object-cover -z-10"
      />

      {/* Content */}
      <div className="container relative">
        <h2 className="sec-title text-white mb-[50px] text-center">
          <span>Why WebRedone</span>
        </h2>
        <p className="text-center -mt-[90px] mb-[50px] text-white md:-mt-[40px] sm:-mt-[20px]">
          a.k.a. Why Work With Us
        </p>

        {/* Grid */}
        <div className="flex flex-row items-stretch space-x-4 md:flex-col md:space-x-0 md:space-y-4">
          {[
            'Tested and proven process that helps us deliver',
            "We've been doing this since 2014, and we're in for the long run",
            'Clear communication and defined expectations is half a project done',
          ].map((text) => (
            <div key={text} className="flex-1">
              <div className="flex h-full items-center bg-white rounded-[5px] px-[40px] py-[70px] text-[22px] font-extrabold text-brand xl:px-10 xl:text-[20px] lg:p-[30px] lg:text-[17px] lg:hyphens-auto md:w-full md:text-center">
                {text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
