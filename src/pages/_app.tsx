import '@styles/tailwind.scss';
import '@styles/global.scss';
import type { AppProps } from 'next/app';
import 'react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from 'recoil';

import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HttpCommon } from './api/http-common';

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();
  return (
    <RecoilRoot>
      <HttpCommon>
        <QueryClientProvider client={queryClient}>
          <ToastContainer limit={1} />
          <Component {...pageProps} />
        </QueryClientProvider>
      </HttpCommon>
    </RecoilRoot>
  );
};

export default App;
