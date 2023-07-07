import '@styles/tailwind.scss';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <title>SIC - Student Informatic Club</title>
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default App;
