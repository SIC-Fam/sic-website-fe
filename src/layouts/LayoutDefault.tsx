import FAQ from '@components/atoms/Faq';
import Footer from '@components/atoms/Footer';
import SICNavbar from '@components/atoms/Navigation';
import ScrollToTop from '@components/atoms/ScrollToTop';
import navAtom from '@state/nav';
import { useRecoilState } from 'recoil';

const LayoutDefault = ({ children }: any) => {
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
