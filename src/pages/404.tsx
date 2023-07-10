import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col justify-center items-center h-full">
        <Image src={'/images/notFound.png'} width={350} height={350} alt="NotFound" />
        <div className="text-center font-mono">
          <p className="text-primary text-4xl">OOPS! Something went wrong</p>
          <p className="text-text text-md">
            Click{' '}
            <Link href="/" className="italic text-primary underline">
              here
            </Link>{' '}
            to redirect to homepage
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
