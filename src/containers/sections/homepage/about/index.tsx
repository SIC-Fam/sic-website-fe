import { SICCard } from '@components/Card';
import HeadTitle from '@components/HeaderTitle';
import moment from 'moment';
import React from 'react';

const liveYear = moment().diff(moment('2001-10-18'), 'year') + 1;

const ABOUT_DATA = [
  {
    symbol: '/images/About-1.png',
    title: 'Student Informatic Club',
    content:
      'SIC belongs to the Youth Union - Student Union, head office is located at room 204 on the 2nd floor of the Library of Thuy Loi University.',
  },
  {
    symbol: '/images/About-2.png',
    title: `${liveYear} years of learning and development`,
    content: `Established on 18/10/2001,
    after nearly ${liveYear} years of establishment and development, SIC has made a significant contribution to the organization of large and small events of the school.`,
  },
  {
    symbol: '/images/About-3.png',
    title: 'SIC - A place to connect passions',
    content:
      'SIC is not only a place where you can improve your computer knowledge and exchange skills in using software, it is also a friendly, fun, positive  environment for students.',
  },
];

const AboutSection = () => {
  return (
    <div className="wrapper bg-transparent">
      <div className="py-14">
        <HeadTitle position={'center'}>about us</HeadTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {ABOUT_DATA.map((about) => (
            <SICCard
              key={about.title}
              position="center"
              symbol={about.symbol}
              title={about.title}
              content={about.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
