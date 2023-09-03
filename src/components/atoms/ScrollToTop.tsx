import { useEffect, useState } from 'react';
import ChevronDown from './icons/ChevronDown';

const ScrollToTop = () => {
  const [canScroll, setCanScroll] = useState(false);
  const isBrowser = () => typeof window !== 'undefined';

  const handleScrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setCanScroll(true);
      } else {
        setCanScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {canScroll && (
        <div
          className="w-10 h-10 rounded-full fixed bg-primary bottom-10 right-16 border border-primary hover:shadow-primary transition-shadow cursor-pointer"
          style={{
            zIndex: 999,
          }}
          onClick={handleScrollToTop}
        >
          <ChevronDown className="rotate-180" color="#fff" />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
