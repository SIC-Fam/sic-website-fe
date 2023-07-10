import '@styles/tailwind.scss';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import 'react-toastify/dist/ReactToastify.css';

import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <title>SIC - Student Informatic Club</title>
      </Head>
      <RecoilRoot>
        <ToastContainer />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default App;
