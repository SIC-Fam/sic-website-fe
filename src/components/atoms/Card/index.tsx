import Facebook from '@components/atoms/icons/Facebook';
import { Card, CardHeader, CardBody, Typography, CardFooter, Tooltip, Avatar } from '@material-tailwind/react';
import clsx from 'clsx';
import Image from 'next/image';

type CardType = {
  symbol?: string;
  title: string;
  content: string;
  position?: string;
  disableHover?: boolean;
  titleClass?: string;
  contentClass?: string;
};

type CardProfileType = {
  image: string;
  name: string;
  description: string;
  social: string;
};

const SICCard = ({
  titleClass = '',
  contentClass = '',
  symbol,
  title,
  content,
  position,
  disableHover = false,
}: CardType) => {
  return (
    <Card
      className={clsx('bg-transparent transition-shadow duration-150 flex-1', {
        'hover:shadow-glove': !disableHover,
      })}
    >
      <CardBody className="flex flex-col items-center px-4 pt-4 pb-16">
        {symbol && <Avatar className="mb-8" src={symbol} variant="rounded" />}
        <Typography
          className={clsx(`mb-8 text-${position || 'left'} w-full   text-sm text-white font-medium`, titleClass)}
        >
          {title}
        </Typography>
        <Typography className={`text-${position || 'left'}   text-xs text-text ${contentClass}`}>{content}</Typography>
      </CardBody>
    </Card>
  );
};

const SICProfileCard = (props: CardProfileType) => {
  const { image, name, description, social } = props;
  return (
    <Card className="p-0 m-0 overflow-hidden bg-transparent border-b-2 duration-150 hover:shadow-glove border-primary">
      <CardHeader floated={false} className="h-80 m-0 rounded-none">
        <Image src={image} alt="profile-picture" fill className="overflow-hidden object-cover" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography className="mb-2 text-xl text-primary font-semibold ">{name}</Typography>
        <Typography className="font-light text-sm text-text  ">{description}</Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Facebook">
          <Typography as="a" href={social} variant="lead" color="blue" textGradient target="_blank">
            <Facebook fill="#F57930" strokeWidth={0} />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export { SICCard, SICProfileCard };
