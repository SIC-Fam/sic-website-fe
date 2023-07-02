import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  const { t } = useTranslation();
  return <>{t('helloWorld')}</>;
}

export const getServerSideProps = async (props) => {
  const { locale } = props;
  return {
    props: { ...(await serverSideTranslations(locale, ['common'])), locale },
  };
};
