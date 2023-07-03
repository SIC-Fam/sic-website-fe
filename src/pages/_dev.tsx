import SICButton from '@components/Button';
import SICInput from '@components/Input';
import SICTag from '@components/Tag';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const DevHead = ({ children }) => {
  return <div className="bg-primary p-2 grid place-items-center text-white my-4">{children}</div>;
};

export default function Dev() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="wrapper grid grid-cols-2 gap-10">
        <div>
          <DevHead>i18n</DevHead>
          {t('helloWorld')}
        </div>

        <div>
          <DevHead>Button Component</DevHead>
          <SICButton color="primary">Color primary</SICButton>
          <SICButton variant="text" color="primary">
            Primary - Text
          </SICButton>
          <SICButton variant="text" color="inherit">
            Inherit - Text
          </SICButton>
          <SICButton variant="outlined" color="inherit">
            Inherit - Outlined
          </SICButton>
        </div>
        <div>
          <DevHead>Tag</DevHead>
          <SICTag type="head">{t('helloWorld')}</SICTag>
          <SICTag type="item">{t('helloWorld')}</SICTag>
        </div>
        <div>
          <DevHead>Input</DevHead>
          <SICInput placeholder={t('helloWorld')} />
          <div className="p-2"></div>
          <SICInput placeholder={t('helloWorld')} error />
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (props) => {
  const { locale } = props;
  return {
    props: { ...(await serverSideTranslations(locale, ['common'])), locale },
  };
};
