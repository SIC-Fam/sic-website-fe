import SICAccordion from '@components/Accordion';
import Banner from '@components/Banner';
import SICButton from '@components/Button';
import { SICCard, SICProfileCard } from '@components/Card';
import Footer from '@components/Footer';
import SICInput from '@components/Input';
import SICModal from '@components/Modal';
import SICNavbar from '@components/Navigation';
import Post from '@components/Post';
import SICSelect from '@components/Select';
import SICTag from '@components/Tag';
import navAtom from '@state/nav';
import moment from 'moment';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

const DevHead = ({ children }) => {
  return <div className="bg-primary p-2 grid place-items-center text-white my-4">{children}</div>;
};

export default function Dev() {
  const { t } = useTranslation();
  const [select, setSelect] = useState('');
  const [navListDev] = useRecoilState(navAtom);
  const [multiSelect, setMultiSelect] = useState<Array<string>>([]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(true);

  const handleToggle = () => {
    setIsOpenModal((prev) => !prev);
  };
  const onChangeSelect = (value: string) => {
    setSelect(value);
  };
  const onChangeMuliSelect = (value: string) => {
    setMultiSelect((prev) => (prev.includes(value) ? [...prev.filter((_v) => _v !== value)] : [...prev, value]));
  };
  return (
    <>
      <SICNavbar list={navListDev} />
      <Banner width={'100%'} height={'100vh'} />
      <div className="py-10">
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
          <div className="flex flex-col items-center">
            <div className="w-full">
              <DevHead>Card</DevHead>
            </div>
            <div className="w-64">
              <SICCard
                symbol="/images/Group.png"
                title="Student Informatic Club"
                content="SIC belongs to the Youth Union - Student Union, head office is located at room 204 on the 2nd floor of the Library of Thuy Loi University."
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full">
              <DevHead>Profile Card</DevHead>
            </div>
            <div className="w-72">
              <SICProfileCard
                image="/images/club-leader.png"
                name="Do Ngoc Minh"
                description="Club leader"
                social="https://www.facebook.com/profile.php?id=100011256225680"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full">
              <DevHead>Post</DevHead>
            </div>
            <div className="w-96">
              <Post
                image="/images/demo-post.png"
                title="Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem"
                summary="Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem, Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem,Lorem ipsum solor sit amet Lorem ipsum solor sit ametLorem ipsum solor sit ametLorem"
                datePublic={moment('2023-07-06').format('DD/MM/yyyy HH:mm:ss')}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full">
              <DevHead>Modal</DevHead>
            </div>
            <div className="w-96">
              <SICButton onClick={handleToggle}>Open Modal</SICButton>
              <SICModal open={isOpenModal} onClose={handleToggle}>
                hihi
              </SICModal>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export const getServerSideProps = async (props) => {
  const { locale } = props;
  return {
    props: { ...(await serverSideTranslations(locale, ['common'])), locale },
  };
};
