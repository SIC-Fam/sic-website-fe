import { Card, CardHeader, CardBody, Typography, CardFooter, Button, Tooltip } from '@material-tailwind/react';
import Image from 'next/image';

export type PostType = {
  image: string;
  title: string;
  summary: string;
  datePublic: string;
};

const Post = (props: PostType) => {
  const { image, title, summary, datePublic } = props;
  return (
    <Card className="bg-transparent overflow-hidden rounded-none hover:shadow-primary transition-shadow cursor-pointer duration-300">
      <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none h-[200px]">
        <Image
          src={image}
          alt="#"
          fill
          className="h-full w-full rounded-none origin-center hover:scale-105 duration-300 overflow-hidden transition-transform object-cover"
        />
      </CardHeader>
      <CardBody className="pb-0">
        <Typography className="font-light text-xs text-text  ">Public At: {datePublic}</Typography>
        <Tooltip
          content={title.length > 30 && title}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          placement="bottom-start"
        >
          <div className="mt-3 text-primary text-sm   flex justify-between items-center">
            {title.length > 50 ? `${title.slice(0, 49)} ...` : title}
          </div>
        </Tooltip>
        <Typography variant="lead" className="mt-3 font-light   text-text text-xs">
          {summary.length > 100 ? `${summary.slice(0, 99)} ...` : summary}
        </Typography>
      </CardBody>
      <CardFooter>
        <Button className="font-sm px-2 py-1 rounded-none float-right text-primary bg-transparent hover:bg-primary hover:text-white transition-color shadow-none hover:shadow-none border border-primary duration-150">
          See Detail
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Post;
