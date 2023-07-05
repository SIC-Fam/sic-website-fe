import '@styles/tailwind.scss';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default appWithTranslation(App);
