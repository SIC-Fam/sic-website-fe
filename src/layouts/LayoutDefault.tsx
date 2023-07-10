import FAQ from '@components/Faq';
import Footer from '@components/Footer';
import SICNavbar from '@components/Navigation';
import ScrollToTop from '@components/ScrollToTop';
import navAtom from '@state/nav';
import { useRecoilState } from 'recoil';

const LayoutDefault = ({ children }) => {
  const [navListItem] = useRecoilState(navAtom);

  return (
    <div className="h-screen">
      <SICNavbar list={navListItem} />
      {children}
      <div className="w-full border-t font-mono border-b border-primary bg-transparent">
        <FAQ />
      </div>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default LayoutDefault;
