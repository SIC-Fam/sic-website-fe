import { atom } from 'recoil';

const partnersAtom = atom({
  key: 'partner',
  default: [
    {
      header: 'ICDL Viet Nam',
      body: '-> ICDL Vietnam is a member of the ICDL Foundation - the global management and administration organization of the ICDL international standard IT skills certificates. The certificate has been recognized in more than 100 countries and territories, in 41 languages ​​and more than 24,000 test centers around the world.',
    },
    {
      header: 'Laptop AZ',
      body: '-> LaptopAZ is a laptop brand specializing in selling laptops and genuine laptop components. With many years of experience in the industry and a dedicated team of professional engineers, LaptopAZ always strives to bring customers the best quality products, excellent warranty and support services, and competitive prices that are worth the value for money invested by customers.',
    },
    {
      header: 'BIT - BAV Club',
      body: '-> BIT - BAV is an academic club focused on Information Technology, under the Student Association of the Banking Academy. It is both a partner and a friendly neighbor of SIC. SIC and BIT always support and accompany each other in various events, big and small.',
    },
  ],
});

export default partnersAtom;
