import { useEffect, useState } from 'react';

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Detect scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed z-50 bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 text-xl text-white transition-all duration-300 ease-in-out bg-gray-500 bg-opacity-50 rounded-full focus:outline-none hover:bg-opacity-75"
        >
          ↑
        </button>
      )}
    </div>
  );
}
