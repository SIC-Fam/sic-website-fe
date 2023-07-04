import SICAccordion from '@components/Accordion';
import SICButton from '@components/Button';
import SICInput from '@components/Input';
import SICSelect from '@components/Select';
import SICTag from '@components/Tag';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';

const DevHead = ({ children }) => {
  return <div className="bg-primary p-2 grid place-items-center text-white my-4">{children}</div>;
};

export default function Dev() {
  const { t } = useTranslation();
  const [select, setSelect] = useState('');
  const [multiSelect, setMultiSelect] = useState<Array<string>>([]);
  const onChangeSelect = (value: string) => {
    setSelect(value);
  };
  const onChangeMuliSelect = (value: string) => {
    setMultiSelect((prev) => (prev.includes(value) ? [...prev.filter((_v) => _v !== value)] : [...prev, value]));
  };
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
        <div>
          <DevHead>Select</DevHead>
          <SICSelect
            label="Select SIC"
            onChangeSelect={onChangeSelect}
            value={select}
            data={[
              {
                label: 'Example 1',
                value: '1',
              },
              {
                label: 'Example 2',
                value: '2',
              },
              {
                label: 'Example 3',
                value: '3',
              },
            ]}
          />
        </div>
        <div>
          <DevHead>Select Multiple</DevHead>
          <SICSelect
            multiple
            label="Select SIC"
            onChangeMultiSelect={onChangeMuliSelect}
            value={multiSelect}
            data={[
              {
                label: 'Example 1',
                value: '1',
              },
              {
                label: 'Example 2',
                value: '2',
              },
              {
                label: 'Example 3',
                value: '3',
              },
            ]}
          />
        </div>
        <div>
          <DevHead>Accordion</DevHead>
          <SICAccordion
            data={[
              {
                header: 'Texted',
                body: 'Lorem',
              },
            ]}
          />
        </div>
        <div>
          <DevHead>List Accordion</DevHead>
          <SICAccordion
            data={[
              {
                header: 'Texted 1',
                body: 'Lorem 1',
              },
              {
                header: 'Texted 2',
                body: 'Lorem 2',
              },
              {
                header: 'Texted 3',
                body: 'Lorem 3',
              },
            ]}
          />
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
