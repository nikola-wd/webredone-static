'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaOptionsType } from 'embla-carousel';
import { Button } from '../Button/Button';

// The slides data:
const slides = [
  {
    title: 'Custom WordPress Development',
    content: [
      'We specialize in state-of-the art custom WordPress development.',
      'Everything is custom-coded from scratch and based on our in-house built Gutenberg-ready starter theme.',
      'We guarantee high level quality of code, fast load times and overall, best practices when it comes to code writing and optimization.',
    ],
    link: '/services/custom-wordpress-development/',
    linkText: 'More About WordPress Development',
  },
  {
    title: 'Custom Javascript Development',
    content: [
      `"Any application that can be written in JavaScript, will eventually be written in JavaScript." - Jeff Atwood`,
      'Jeff was not wrong. With the powers that Javascript, React, Node and other libraries/frameworks give us, we can create anything these days.',
      'Be it a web, mobile or a desktop app, we can do it.',
    ],
    link: '/services/javascript-development/',
    linkText: 'More About Javascript Development',
  },
  {
    title: 'Animation & Front-End development',
    content: [
      'Pixel-perfect front-end development and animation based on your Figma, Xd, Sketch, Photoshop or any other design file.',
      'We code responsive and optimized frontends based on your design that you can easily integrate in any framework/cms of choice.',
      'HTML or SVG animation to augment your visual presence.',
    ],
    link: '/services/front-end-development/',
    linkText: 'More about animation & front-end',
  },
];

// Breakpoints array as in old code
// [mediaQuery, slidesToScroll, slideWidth%, draggable, flexWrap, gap]
const breakpoints = [
  ['(min-width: 1521px)', 1, 100 / 3, false, 'wrap', 50],
  ['(max-width: 1520px)', 1, 100 / 3, false, 'wrap', 20],
  ['(max-width: 1250px)', 1, 100, false, 'wrap', 0],
  ['(max-width: 991px)', 1, 60, true, 'nowrap', 20],
  ['(max-width: 767px)', 1, 80, true, 'nowrap', 20],
  ['(max-width: 530px)', 1, 93, true, 'nowrap', 20],
];

export const HomeWhatWeDo = () => {
  const [emblaNode, embla] = useEmblaCarousel();
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const [currentSettings, setCurrentSettings] = useState<{
    slidesToScroll: number;
    slideWidth: number;
    draggable: boolean;
    flexWrap: string;
    gap: number;
  }>({
    slidesToScroll: 1,
    slideWidth: 100 / 3,
    draggable: false,
    flexWrap: 'wrap',
    gap: 50,
  });

  const applyBreakpoints = useCallback(() => {
    for (const bp of breakpoints) {
      const [query, slidesToScroll, slideWidth, draggable, flexWrap, gap] =
        bp as [string | false, number, number, boolean, string, number];

      if (query === false || window.matchMedia(query).matches) {
        setCurrentSettings({
          slidesToScroll,
          slideWidth,
          draggable,
          flexWrap,
          gap,
        });
        return;
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      applyBreakpoints();
      window.addEventListener('resize', applyBreakpoints);
      return () => {
        window.removeEventListener('resize', applyBreakpoints);
      };
    }
  }, [applyBreakpoints]);

  const options: EmblaOptionsType = {
    loop: false,
    align: 'center',
    containScroll: false,
    speed: 10,
    slidesToScroll: currentSettings.slidesToScroll,
    // We won't set "draggable" directly (since it doesn't exist).
    // Instead, we use dragThreshold to simulate non-draggable behavior.
  };

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (embla) {
      // If draggable is false, set a large dragThreshold to disable dragging.
      // If draggable is true, set it to 0 to enable normal dragging.
      const dragThresholdValue = currentSettings.draggable ? 0 : 99999;

      embla.reInit({
        ...options,
        dragFree: false, // We keep dragFree false as old code had no free dragging
        dragThreshold: dragThresholdValue,
      });
      onSelect();
      setScrollSnaps(embla.scrollSnapList());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSettings, embla]);

  useEffect(() => {
    if (!embla) return;
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
    embla.on('reInit', onSelect);
  }, [embla, onSelect]);

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  const containerClasses = `embla__container flex ${
    !currentSettings.draggable ? 'no-transform' : ''
  }`;

  const containerStyle = {
    width: `calc(100% + ${currentSettings.gap}px)`,
    marginLeft: `-${currentSettings.gap * 0.5}px`,
    flexWrap: currentSettings.flexWrap as 'wrap' | 'nowrap',
  } as React.CSSProperties;

  const slideStyle = {
    flex: `0 0 ${currentSettings.slideWidth}%`,
    maxWidth: `${currentSettings.slideWidth}%`,
    paddingLeft: `${currentSettings.gap * 0.5}px`,
    paddingRight: `${currentSettings.gap * 0.5}px`,
  } as React.CSSProperties;

  return (
    <section
      className="home-what-we-do pt-0"
      aria-label="Homepage What We Do Section"
    >
      <div className="container pt-[100px] xl:pt-[80px] lg:pt-[70px]">
        <h2 className="sec-title sec-title--with-lead text-brand font-bold text-center relative mb-[60px] leading-none sm:mb-[80px] lg:mb-[130px] uppercase">
          <span>What We Do</span>
        </h2>
        <p className="lead text-center max-w-[956px] mx-auto text-[18px] font-light px-4 lg:text-[21px] xl:text-[24px] mt-0 text-[#666] tracking-[0.8px] leading-[1.45] mb-[60px] lg:mb-[80px] xl:mb-[120px]">
          <span>
            We are a full-stack web development studio that specializes in
            crafting custom and scalable web solutions.
          </span>
          <br />
          <br />
          <span>
            Our set of services includes: Custom Wordpress theme development,
            Gutenberg blocks development, React apps development, web animation
            (SVG, Canvas, CSS) and optimization (load-time, SEO, accessibility).
          </span>
        </p>

        <div
          className="relative embla embla--home-services"
          ref={emblaNode}
          style={{ opacity: 1 }}
        >
          <div className={containerClasses} style={containerStyle}>
            {slides.map((slide) => (
              <div
                key={slide.title}
                className="embla__slide relative transition-opacity duration-300"
                style={slideStyle}
              >
                <div className="embla__slide__inner">
                  <div className="new-home-service-card relative bg-white border-[3px] border-secondary p-[40px] transition-all duration-200 hover:translate-x-[3px] hover:-translate-y-[3px]">
                    <h3 className="text-secondary font-black leading-none mb-6 transition-all duration-200 text-[45px] xl:text-[35px] lg:text-[25px]">
                      {slide.title}
                    </h3>
                    {slide.content.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="mb-4 text-[16px] text-[#666] tracking-[0.8px] leading-[1.45] lg:text-[20px] mt-0"
                      >
                        {paragraph}
                      </p>
                    ))}
                    <p className="mb-0">
                      <a
                        href={slide.link}
                        className="text-secondary font-normal"
                      >
                        {slide.linkText}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="buttons">
          <button
            type="button"
            className="embla__btn embla__btn-prev"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            aria-label="Go to previous slide"
          />
          <div className="embla__dots" />
          <button
            type="button"
            className="embla__btn embla__btn-next"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            aria-label="Go to next slide"
          />
        </div>

        <Button
          href="/services"
          theme="gradient"
          className="mx-auto mt-[120px] lg:mt-10"
        >
          services
        </Button>
      </div>
    </section>
  );
};
