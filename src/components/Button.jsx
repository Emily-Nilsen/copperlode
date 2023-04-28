import { forwardRef } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
  outline:
    'inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors',
};

const variantStyles = {
  solid: {
    copper:
      'relative overflow-hidden bg-copper text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:contrast-125 active:text-white/80 before:transition-colors',
    white:
      'bg-white text-copper hover:bg-white/90 active:bg-white/90 active:text-copper/70',
    gray: 'bg-gray-950 text-white hover:bg-gray-900 active:bg-gray-950 active:text-white/80',
  },
  outline: {
    gray: 'border-none text-gray-700 hover:border-none active:bg-transparent active:text-gray-700/80 uppercase cursor-pointer',
  },
};

export const Button = forwardRef(function Button(
  { variant = 'solid', color = 'copper', className, href, ...props },
  ref
) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  );

  return href ? (
    <Link ref={ref} href={href} className={className} {...props} />
  ) : (
    <button ref={ref} className={className} {...props} />
  );
});
