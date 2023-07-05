import SICAccordion from '@components/Accordion';
import SICButton from '@components/Button';
import { SICCard, SICProfileCard } from '@components/Card';
import SICInput from '@components/Input';
import SICNavbar, { NavbarListType } from '@components/Navigation';
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
  // const router = useRouter();
  // const [auth] = useRecoilState(authAtom)
  const [multiSelect, setMultiSelect] = useState<Array<string>>([]);
  const onChangeSelect = (value: string) => {
    setSelect(value);
  };
  const onChangeMuliSelect = (value: string) => {
    setMultiSelect((prev) => (prev.includes(value) ? [...prev.filter((_v) => _v !== value)] : [...prev, value]));
  };
  // useEffect(() => {
  //   if (auth === null) {
  //     router.push('/');
  //     console.log(auth)
  //   }
  // }, [auth, router])
  const navList: Array<NavbarListType> = [
    {
      name: 'home',
      href: '',
    },
    {
      name: 'about us',
      href: '',
    },
    {
      name: 'groups',
      href: '',
      menus: [
        {
          label: 'technical group',
          href: '',
        },
        {
          label: 'media group',
          href: '',
        },
        {
          label: 'study group',
          href: '',
        },
        {
          label: 'support group',
          href: '',
        },
      ],
    },
    {
      name: 'posts',
      href: '',
    },
  ];
  return (
    <>
      <SICNavbar list={navList} />
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
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (props) => {
  const { locale } = props;
  return {
    props: { ...(await serverSideTranslations(locale, ['common'])), locale },
  };
};
