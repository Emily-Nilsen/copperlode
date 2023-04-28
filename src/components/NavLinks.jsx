import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

export function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return [
    ['Our Beers', '/our-beers'],
    ['Food Menu', '/food-menu'],
    ['About Us', '/about-us'],
    ['Brewery Tours', '/brewery-tours'],
    ['Blog', '/blog'],
  ].map(([label, href], index) => (
    <Link
      key={label}
      href={href}
      className="lg:relative block my-3 lg:-my-2 -mx-3 rounded-lg px-3 py-2 lg:text-sm text-white transition-colors delay-150 hover:delay-[0ms]"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="inset-0 rounded-lg lg:absolute bg-white/20"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{label}</span>
    </Link>
  ));
}
