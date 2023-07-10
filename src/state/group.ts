import { atom } from 'recoil';
import { formatToPrimaryText } from '@utils/common';

const groupsAtom = atom({
  key: 'groups',
  default: [
    {
      title: 'Study group',
      mainDescription: formatToPrimaryText(
        `One of the important group of SIC. The study group contributes to promoting the club's learning activities, acting as the "knowledge giant" of club`,
        ['SIC', 'knowledge giant'],
      ),
      shortDescription: 'A knowledge giant of SIC ?',
      longDescription: formatToPrimaryText(
        `The study group is considered the intellectual powerhouse of SIC. It is comprised of highly knowledgeable members in various academic fields who engage in activities related to learning and enhancing the knowledge of club members.`,
        ['SIC'],
      ),
      leaderInfo: {
        title: 'Leader of study group - the Scholarship Destroyer',
        description: formatToPrimaryText(
          "The leader of the study group, who is also the vice president of the club, is also known as a scholarship destroyer. That's because in 2 years of study, 3/4 of the scholarship was eaten by him. Besides, he also actively participates in competitions",
          ['scholarship destroyer'],
        ),
      },
      data: [
        {
          title: 'Organizing discussions and conversations',
          description:
            "The study group can organize discussions and conversations on topics related to the club's field. This can be an opportunity for members to share their knowledge, experiences, and opinions.",
          image: '/images/study/Study1.png',
          imageDes: '1 session on how to study at university',
        },
        {
          title: 'Conducting courses and training sessions:',
          description:
            'The study group can arrange courses and training sessions to help club members enhance their skills and knowledge in their respective fields. This may include instructional sessions, workshops, or online courses.',
          image: '/images/study/Study2.png',
          imageDes: 'C class ',
        },
        {
          title: 'Creating learning materials',
          description:
            'The study group can develop learning materials, articles, or resources to help members grasp essential knowledge. This may involve writing blog posts, editing books, creating lectures, or presentation slides',
          image: '/images/study/Study3.png',
          imageDes: 'Group to exchange knowledge',
        },
        {
          title: 'Organizing competitions and challenges:',
          description:
            'The study group can host competitions and challenges to encourage club members to sharpen their skills and apply the knowledge they have acquired. These can include writing competitions, puzzles, or real-world projects.',
          image: '/images/study/Study4.png',
          imageDes: 'Pet Lover - 1 of the websites that won the top prize in the web coding contest',
        },
      ],
    },
    {
      title: 'Technical group',
      mainDescription: formatToPrimaryText(
        `The Technical group, consisting of members passionate about computer hardware, can be regarded as the "Technology experts" of SIC. They are responsible for managing the technological system, providing technical support, and ensuring the stable operation of technology-related services for learning purposes.`,
        ['SIC', 'Technology experts'],
      ),
      shortDescription: 'Technology expert of SIC ?',
      longDescription: formatToPrimaryText(
        `The technical group is considered the members who have passionate about computer hardware. They are knowledgeable about everything in a computer, from ram, chip, CPU,... and a billion other things.`,
        ['SIC'],
      ),
      leaderInfo: {
        title: 'Leader of technical group - The dreamy soul boy',
        description:
          'The leader of the technical group know as a strong and passionate young man. However, in contrast to the dry stereotype often associated with technical guys, he is a dreamy young man who has a special talent for singing and sings very well.',
      },
      data: [
        {
          title: 'System Management and Maintenance',
          description:
            'The Technical Committee is responsible for managing and maintaining the computer systems and infrastructure of the club, includes software installation, configuration, and updates, monitoring networks and systems, and ensuring the stable operation of devices.',
          image: '/images/technical/technical1.png',
          imageDes: 'System Management and Maintenance',
        },
        {
          title: 'Technical Support for Members',
          description:
            'The Technical Group provides technical support for club members. This may involve assisting with software installation and usage, troubleshooting technical issues, and providing guidance on technology usage and advice.',
          image: '/images/technical/technical2.png',
          imageDes: 'C class ',
        },
        {
          title: 'Event Organization and Management',
          description: 'The Technical group provides event that help students and teachers make up their laptop.',
          image: '/images/technical/technical3.png',
          imageDes: 'Tech & Support day of SIC',
        },
        {
          title: 'Training and Skill Development',
          description:
            'The Technical Group can organize training sessions and activities aimed at developing the technological skills of club members.',
          image: '/images/technical/technical4.png',
          imageDes: 'Training Hardware Day',
        },
      ],
    },
    {
      title: 'Media group',
      mainDescription: formatToPrimaryText(
        `One of the important group of SIC. They can be describe as “the face” of SIC`,
        ['SIC', 'the face'],
      ),
      shortDescription: 'The face of SIC ?',
      longDescription: formatToPrimaryText(
        `The media group is a collective of individuals with expertise in journalism, broadcasting, and content creation, working together to produce and distribute information and entertainment.`,
        ['SIC'],
      ),
      leaderInfo: {
        title: 'Leader of media group - An Enthusiastic boy who loves beauty',
        description:
          'The leader of the media group know as a young and passionate boy. With his passion and leadership skills, he brings creativity and innovation to the field of media, inspiring others to appreciate the beauty that surrounds them.',
      },
      data: [
        {
          title: 'Building public image',
          description:
            "The Media Group is responsible for building and maintaining a positive public image for the club. This involves developing communication strategies, creating appropriate content, and ensuring that the club's messages and values are effectively conveyed to the public.",
          image: '/images/media/media1.png',
          imageDes: 'Building public image',
        },
        {
          title: 'Communication and public relations',
          description:
            'The Media Group plays a crucial role in communicating with club members and stakeholders. They must ensure accurate and reliable information is communicated while creating an open and effective communication environment for exchanging opinions and engaging in club activities.',
          image: '/images/media/media2.png',
          imageDes: "SIC join to celebrate BIT's partner's birthday",
        },
        {
          title: 'Creating media content',
          description:
            "The Media Group is responsible for generating creative and engaging media content to introduce and promote club activities. This may involve writing articles, taking photos, producing videos, managing social media channels, and designing communication materials to enhance the club's vision and recognition within the community.",
          image: '/images/media/media3.png',
          imageDes: '1 member is focusing on creating content',
        },
        {
          title: 'Training and Skill Development',
          description:
            'The Technical Group can organize training sessions and activities aimed at developing the technological skills of club members.',
          image: '/images/media/media4.png',
          imageDes: 'Training design Day',
        },
      ],
    },
  ],
});

export default groupsAtom;
