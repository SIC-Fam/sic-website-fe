import ChevronDown from './icons/ChevronDown';

const ScrollToTop = () => {
  const isBrowser = () => typeof window !== 'undefined';
  const handleScrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div
      className="w-10 h-10 rounded-full fixed bg-primary bottom-10 right-16 border border-primary hover:shadow-primary transition-shadow cursor-pointer"
      style={{
        zIndex: 999,
      }}
      onClick={handleScrollToTop}
    >
      <ChevronDown className="rotate-180" color="#fff" />
    </div>
  );
};

export default ScrollToTop;
