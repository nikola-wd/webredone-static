// components/Button/Button.tsx
'use client';

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import Link, { type LinkProps } from 'next/link';
import { shared, variants } from './variants';
import { classNames } from '@/app/utils/classNames';
import { Loader } from '../SVG/Loader';

const button = cva(shared, {
  variants,
  defaultVariants: {
    theme: 'secondary',
  },
});

interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  href?: string;
  type?: 'button' | 'submit';
  isLoading?: boolean;
}

interface BaseLinkProps
  extends LinkProps,
    VariantProps<typeof button>,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
  href: LinkProps['href'];
  isLoading?: boolean;
}

export type CustomButtonProps = BaseButtonProps | BaseLinkProps;

export const Button: FC<CustomButtonProps> = ({
  theme,
  isLoading,
  className,
  children,
  ...rest
}) => {
  const buttonClasses = classNames(button({ theme, className }));

  const InnerContent = (
    <>
      {typeof isLoading !== 'undefined' ? (
        <>
          <span className={classNames(isLoading && 'opacity-0')}>
            {children}
          </span>
          {isLoading ? (
            <Loader className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          ) : null}
        </>
      ) : (
        children
      )}
    </>
  );

  if ('href' in rest && rest.href) {
    return (
      <Link
        href={rest.href}
        className={buttonClasses}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {InnerContent}
      </Link>
    );
  }

  const { type = 'button' } = rest;
  return (
    <button
      type={type === 'button' ? 'button' : 'submit'}
      className={buttonClasses}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {InnerContent}
    </button>
  );
};
