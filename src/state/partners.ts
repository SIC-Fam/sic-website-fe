import { atom } from 'recoil';

const partnersAtom = atom({
  key: 'partner',
  default: [
    {
      header: 'ICDL Viet Nam',
      body: '-> ICDL Vietnam is a member of the ICDL Foundation - the global management and administration organization of the ICDL international standard IT skills certificates. The certificate has been recognized in more than 100 countries and territories, in 41 languages ​​and more than 24,000 test centers around the world.',
    },
    {
      header: 'Texted 1',
      body: 'Lorem 1',
    },
    {
      header: 'Texted 1',
      body: 'Lorem 1',
    },
  ],
});

export default partnersAtom;
