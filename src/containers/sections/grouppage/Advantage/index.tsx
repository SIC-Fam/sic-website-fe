import React from 'react';

import BulbIcon from '@components/atoms/icons/Bulb';
import ShipIcon from '@components/atoms/icons/Ship';
import WorldIcon from '@components/atoms/icons/World';
import BookIcon from '@components/atoms/icons/Book';
import PrizeIcon from '@components/atoms/icons/Prize';

const ADVANTAGES = [
  {
    icon: <BulbIcon />,
    title: 'Knowledge Expansion',
    description:
      'Have the opportunity to learn from other member’s experiences, perspectives, and insights, which can broaden your understanding and expand your knowledge',
  },
  {
    icon: <ShipIcon />,
    title: 'Skill Development',
    description:
      "By participating in study group’s activities, you can acquire new skills, refine existing ones, and improve your overall competence in areas relevant to the club's focus",
  },
  {
    icon: <WorldIcon />,
    title: 'Networking Opportunities',
    description:
      'Allows you to connect with like-minded individuals who share your passion for learning and personal growth',
  },
  {
    icon: <BookIcon />,
    title: 'Access to Resources',
    description:
      'As part of the learning department, you may gain access to various learning resources, such as educational materials, books, research papers, online platforms, or databases',
  },
  {
    icon: <PrizeIcon />,
    title: 'Recognition and Leadership Opportunities',
    description:
      'Active involvement in the learning department can lead to recognition for your contributions, such as leadership roles, committee positions, or opportunities to organize events or initiatives',
  },
];

const AdvantageSection = () => {
  return (
    <div className="py-14">
      <h1 className="text-primary text-xl md:text-2xl lg:text-3xl text-center font-medium">What will you get?</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 mt-20">
        {ADVANTAGES.map((item) => (
          <div
            className="grid gap-4 rounded-lg place-items-center p-5 cursor-pointer duration-150 hover:shadow-glove"
            key={item.title}
          >
            <span className="text-primary">{item.icon}</span>
            <span className="text-primary font-medium text-center text-md">{item.title}</span>
            <p className="text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvantageSection;
