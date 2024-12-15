// app/components/layout/Breadcrumbs.tsx
import Link from 'next/link';

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: 'light' | 'dark';
  className?: string;
}

export const Breadcrumbs = ({
  items,
  variant = 'dark',
  className = '',
}: BreadcrumbsProps) => {
  const baseStyles =
    'relative z-10 flex flex-wrap list-none p-0 m-0 text-[18px] md:text-[16px]';
  const variantStyles = {
    light: 'text-white/90',
    dark: 'text-gray-600',
  };

  return (
    <nav className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      <ol className="flex items-center flex-wrap">
        {items.map((item, idx) => (
          <li key={item.href} className="flex items-center">
            <Link
              href={item.href}
              className={`
                relative inline-block transition-all duration-200 ease-in-out no-underline
                ${
                  variant === 'light'
                    ? 'text-white/90 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }
                ${idx === items.length - 1 ? 'underline font-semibold' : ''}
              `}
            >
              {item.name}
            </Link>
            {idx < items.length - 1 && (
              <span className="mx-2 opacity-80">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
