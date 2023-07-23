import { SICCard } from '@components/Card';
import HeadTitle from '@components/HeaderTitle';
import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Typography } from '@material-tailwind/react';

const ACTIVITY_DATA = [
  {
    title: 'Repair & Advice Day',
    content:
      'This is an extremely important activity, which is organized by SIC every year. This activity is for free and aimed at students and lecturers in the school, including practical activities such as: computer cleaning and upgrading support, free computer consultation...At the end of the event, participants will receive valuable gifts from the organizers.',
    image: '/images/Activities-1.png',
  },
  {
    title: 'Support for new students.',
    content:
      'SIC always accompanies new students, standing by their side from “their first steps”, supporting them in profile declaration and completing enrollment procedures through various means, whether near or far, with just a few mouse clicks. In addition, online support channels and contact hotline are always available to address any questions or concerns for new students and parents.',
    image: '/images/Activities-2.png',
  },
  {
    title: 'Lessons to improve skills',
    content:
      'SIC regularly organizes workshops related to enhancing important skills for students, particularly notable ones include: Office computer skills workshops, Programming skills workshops, Hardware computer skills workshops, Graphic design workshops. At these workshops, SIC provides valuable opportunities for students to learn and improve their skills, enabling them to excel in their academic pursuits and future careers.',
    image: '/images/Activities-3.png',
  },
  {
    title: 'Progamming contests',
    content:
      'SIC regularly participates in programming competitions inside and outside the school. This gives Club members the opportunity to try their hand at the arena full of tension and pressure, thereby concluding themselves with extremely valuable experiences and lessons!',
    image: '/images/Activities-4.png',
  },
  {
    title: 'Team-building',
    content:
      "Besides engaging in challenging study sessions, SIC's members also enjoy various recreational activities such as football, camping, and exciting competitions like League of Legends or Arena of Valor tournaments. These activities promote bonding, teamwork, and skill development.",
    image: '/images/Activities-5.png',
  },
];

const ActivitySection = () => {
  return (
    <div className="wrapper bg-transparent py-14">
      <HeadTitle position="center">our activities</HeadTitle>
      <div className='mt-8'>
        {ACTIVITY_DATA.map((activity, index) => (
          <div
            key={activity.title}
            className={clsx(['lg:flex mb-10 lg:mb-20 items-center'], {
              'flex-row-reverse': index % 2 === 0,
            })}
          >
            <div className="flex-1 relative h-80">
              <Image className="object-cover object-center" fill sizes="100%" src={activity.image} alt="#" />
            </div>
            <div className="flex-1 py-8">
              <div
                className={clsx({
                  'lg:pl-[8%] lg:pr-[3%]': index % 2 !== 0,
                  'lg:pl-[3%] lg:pr-[8%]': index % 2 === 0,
                })}
              >
                <Typography className="text-lg sm:text-xl lg:text-2xl mb-8 w-full font-mono text-white font-medium">
                  {activity.title}
                </Typography>
                <Typography className="font-mono text-xs text-text ">{activity.content}</Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitySection;
