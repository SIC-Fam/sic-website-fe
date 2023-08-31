import SICButton from '@components/atoms/Button';
import InputBox from '@components/atoms/InputBox';
import { Typography } from '@material-tailwind/react';
import dynamic from 'next/dynamic';
const Map = dynamic(() => import('@components/atoms/Map'), { ssr: false });

const FAQ = () => {
  return (
    <div className="lg:grid grid-cols-3 ">
      <Map className="lg:h-full h-[300px]" />
      <div className="col-span-2">
        <div className="p-[8%] flex flex-col font-mono gap-4">
          <Typography className="text-2xl md:text-4xl font-mono text-primary">Get in touch</Typography>
          <Typography className="font-sm text-text">
            If you have any questions, please leave your message below so that the SIC team can answer them
          </Typography>
          <form>
            <div className="md:grid grid-cols-2 gap-4">
              <InputBox
                isRequired={true}
                placeholder={'Your Full Name'}
                value={''}
                name={'fullname'}
                onChange={undefined}
              />
              <InputBox isRequired={true} placeholder={'Your Email'} value={''} name={'email'} onChange={undefined} />
            </div>
            <div className="w-full">
              <InputBox
                isRequired={false}
                placeholder={'Your Content'}
                value={''}
                name={'content'}
                onChange={undefined}
                type="textarea"
              />
            </div>
            <SICButton className="w-fit float-right mt-8 border border-primary" variant="text" type="submit">
              {`Send -->`}
            </SICButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
