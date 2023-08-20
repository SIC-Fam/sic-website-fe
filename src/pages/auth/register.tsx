import { Meta } from '@/components/meta';
import { HttpResponse } from '@components/lib/api';
import { NextPageWithLayout } from '@components/lib/next';
import RegisterPage from '@components/templates/Auth/register';
import LayoutDefault from '@layouts/LayoutDefault';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type Props = HttpResponse<null>;

const Page: NextPageWithLayout<Props> = () => <RegisterPage />;

Page.getLayout = LayoutDefault;
Page.getMeta = Meta(() => ({ title: 'SIC - Register' }));

export const getServerSideProps = async (context: any) => {
  const { locale = 'en' } = context;

  // check login
  const checkLogin = true;
  if (!checkLogin) {
    const { res } = context;
    res.writeHead(301, { Location: '/login' });
    res.end();
    return { isLogin: false };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'warehouse/warehouseCommon'])),
    },
  };
};

export default Page;
