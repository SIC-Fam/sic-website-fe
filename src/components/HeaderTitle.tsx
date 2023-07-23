type HeadType = {
  color?: string;
  children: any;
  position?: string;
};

const HeadTitle = (props: HeadType) => {
  return (
    <div
      className={`${props?.color === 'primary' ? 'bg-primary text-white' : 'bg-transparent text-primary'} text-${
        props.position || 'left'
      } font-mono uppercase text-xl md:text-2xl xl:text-4xl font-bold`}
    >
      {props.children}
    </div>
  );
};

export default HeadTitle;
