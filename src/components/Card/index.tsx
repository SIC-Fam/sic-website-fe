import Facebook from '@components/icons/Facebook';
import { Card, CardHeader, CardBody, Typography, CardFooter, Tooltip, Avatar } from '@material-tailwind/react';
import Image from 'next/image';

type CardType = {
  symbol: string;
  title: string;
  content: string;
};

type CardProfileType = {
  image: string;
  name: string;
  description: string;
  social: string;
};

const SICCard = (props: CardType) => {
  const { symbol, title, content } = props;
  return (
    <Card className="bg-transparent shadow-primary">
      <CardBody className="flex flex-col items-center gap-5 px-4 pt-4 pb-16">
        <Avatar src={symbol} variant="rounded" />
        <Typography variant="h5" color="blue-gray" className="mb-2 text-center font-mono text-sm text-white">
          {title}
        </Typography>
        <Typography className="text-center font-mono text-xs text-text">{content}</Typography>
      </CardBody>
    </Card>
  );
};

const SICProfileCard = (props: CardProfileType) => {
  const { image, name, description, social } = props;
  return (
    <Card className="p-0 m-0 overflow-hidden bg-transparent border-b-2 shadow-primary border-primary">
      <CardHeader floated={false} className="h-64 m-0 rounded-none">
        <Image src={image} alt="profile-picture" fill className="overflow-hidden" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography className="mb-2 text-xl text-primary font-mono">{name}</Typography>
        <Typography className="font-light text-sm text-text font-mono">{description}</Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Facebook">
          <Typography as="a" href={social} variant="lead" color="blue" textGradient target="_blank">
            <Facebook color="#F57930" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export { SICCard, SICProfileCard };
