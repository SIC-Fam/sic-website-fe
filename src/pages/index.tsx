import { Meta } from '@/components/meta';
import { HttpResponse } from '@components/lib/api';
import { NextPageWithLayout } from '@components/lib/next';
import Home from '@components/templates/Home';
import LayoutDefault from '@layouts/LayoutDefault/LayoutDefault';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type Props = HttpResponse<null>;

const Page: NextPageWithLayout<Props> = () => <Home />;

Page.getLayout = LayoutDefault;
Page.getMeta = Meta(() => ({ title: 'SIC - Student Informatic Club' }));

export const getServerSideProps = async (context: any) => {
  const { locale = 'en' } = context;

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
