import Footer from '@components/Footer';
import SICNavbar from '@components/Navigation';
import navAtom from '@state/nav';
import { useRecoilState } from 'recoil';

const LayoutDefault = ({ children }) => {
  const [navListItem] = useRecoilState(navAtom);

  return (
    <div className="h-screen">
      <SICNavbar list={navListItem} />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutDefault;
