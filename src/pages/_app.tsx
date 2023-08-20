import '@styles/tailwind.scss';
import type { AppProps } from 'next/app';
import 'react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from 'recoil';

import { ToastContainer } from 'react-toastify';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <ToastContainer />
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default App;
