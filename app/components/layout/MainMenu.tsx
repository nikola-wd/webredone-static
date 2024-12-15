'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { classNames } from '@/app/utils/classNames';

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about-us', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact-us', label: 'Contact Us' },
];
export const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('js-is-open');
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] overflow-visible md:overflow-hidden">
      <div className="mx-auto px-4 flex justify-between items-center py-[7px] pb-[10px]">
        <Link
          href="/"
          className="flex items-center w-[170px] translate-y-[3px] lg:translate-y-[1px] max-lg:w-[150px]"
          aria-label="Web Redone Logo - Go to homepage"
        >
          <Image
            src="/img/webredone-custom-wordpress-development-logo.webp"
            alt="WebRedone - Custom WordPress Development Studio"
            width={170}
            height={40}
            priority
          />
        </Link>

        <nav
          className={classNames(
            'fixed md:relative md:translate-x-0',
            'top-[53px] md:top-auto left-full md:left-auto',
            'bg-white md:bg-transparent',
            'w-[400px] md:w-auto h-screen md:h-auto',
            'z-30 transition-transform duration-400 ease-cubic-in-out',
            isOpen ? 'translate-x-[-100%]' : 'translate-x-0',
            'max-sm:w-[80%]'
          )}
          aria-label="main navigation"
        >
          <ul
            className={classNames(
              'flex flex-col md:flex-row md:gap-[20px] lg:gap-[30px] m-0 p-0 list-none',
              'h-[calc(100vh-53px)] md:h-auto',
              'md:items-center'
            )}
          >
            {menuItems.map((item, index) => {
              const isLast = index === menuItems.length - 1;
              const isActive = pathname === item.href;

              return (
                <li
                  key={item.href}
                  className={classNames(
                    'md:first:ml-0',
                    'w-full md:w-auto h-[53px] md:h-auto m-0',
                    'border-b md:border-b-0 border-[#lightgrey]',
                    index === 0 && 'border-t md:border-t-0',
                    isActive && 'md:font-bold'
                  )}
                >
                  <Link
                    href={item.href}
                    className={classNames(
                      'text-brand text-[18px] font-normal leading-none no-underline',
                      'flex md:inline-flex relative',
                      'w-full md:w-auto h-full md:h-auto justify-center items-center',
                      isLast &&
                        'bg-main-gradient !text-white md:rounded-[25px] px-[30px] py-3 hover:opacity-90 transition-all duration-200 ease-cubic-in-out md:ml-0',
                      // Desktop hover effect
                      'md:before:content-[""] md:before:absolute md:before:top-0 md:before:left-1/2 md:before:-translate-x-1/2 md:before:w-[50px] md:before:h-[10px] md:before:bg-secondary md:before:-translate-y-[42px] md:before:transition-transform md:before:duration-200 md:before:ease-cubic-in-out',
                      'hover:text-brand md:hover:before:-translate-y-[28px]'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className={classNames(
            'flex md:hidden flex-col justify-between h-[25px] bg-transparent border-0 p-0 cursor-pointer outline-none',
            isOpen &&
              'w-[36px] h-[29px] translate-x-[6px] transition-all duration-200 ease-cubic-in-out'
          )}
          onClick={toggleMenu}
          aria-label="Toggle Mobile Menu"
        >
          {[1, 2, 3].map((line) => (
            <span
              key={line}
              className={classNames(
                'block w-[35px] h-[3px] bg-secondary transition-all duration-200 ease-cubic-in-out',
                isOpen && [
                  'w-[36px]',
                  line === 1 && 'origin-left rotate-45',
                  line === 2 && 'origin-center scale-x-0',
                  line === 3 && 'origin-left -rotate-45',
                ]
              )}
            />
          ))}
        </button>
      </div>

      {/* Mobile backdrop */}
      <button
        type="button"
        className={classNames(
          'md:hidden fixed top-[64px] left-0 w-full h-screen bg-black transition-opacity duration-400 ease-cubic-in-out z-10',
          isOpen
            ? 'opacity-30 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
        onClick={() => {
          setIsOpen(false);
          document.body.classList.remove('js-is-open');
        }}
      />
    </header>
  );
};
