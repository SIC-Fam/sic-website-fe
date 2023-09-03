import ChevronDown from '@components/atoms/icons/ChevronDown';
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';
import { useState } from 'react';

type AccordionType = {
  header: string;
  body: string;
};

type AccordionListType = {
  data: Array<AccordionType>;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: number) => void;
};

const SICAccordion = (props: AccordionListType) => {
  const { data, onChange } = props;
  const [toggleOpen, setToggleOpen] = useState<number>(0);

  const handleToggleOpen = (value: number) => {
    onChange && onChange(value);
    setToggleOpen((prev) => (prev === value ? prev : value));
  };

  return data.length === 1 ? (
    <Accordion
      icon={
        <ChevronDown
          style={{
            transform: toggleOpen === 0 ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'all .3s',
          }}
        />
      }
      open={toggleOpen === 0}
      className=" "
    >
      <AccordionHeader
        style={
          toggleOpen === null
            ? {
                borderRadius: '8px',
              }
            : {
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
              }
        }
        onClick={() => handleToggleOpen(0)}
        className={`hover:text-primary py-2 px-4 border border-text text-sm   ${
          toggleOpen === 0 ? 'text-primary' : 'text-text'
        }`}
      >
        {data[0]?.header}
      </AccordionHeader>
      <AccordionBody
        style={{
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
          lineHeight: '2rem',
        }}
        className="py-2 px-4   text-sm bg-text text-white"
      >
        {data[0]?.body}
      </AccordionBody>
    </Accordion>
  ) : (
    data.map((item, index) => (
      <Accordion
        key={index}
        icon={
          <ChevronDown
            style={{
              transform: toggleOpen === index ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'all .3s',
            }}
          />
        }
        open={toggleOpen === index}
        className="  shadow-[0px_0px_2px_2px_rgba(0,0,0,0.2)]"
      >
        <AccordionHeader
          style={
            index === 0
              ? {
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                }
              : index === data.length - 1
              ? toggleOpen !== index
                ? {
                    borderBottomLeftRadius: '8px',
                    borderBottomRightRadius: '8px',
                  }
                : {}
              : {}
          }
          onClick={() => handleToggleOpen(index)}
          className={`hover:text-primary py-2 px-4 text-sm border-b-[rgba(0,0,0,0.1)]   ${
            toggleOpen === index ? 'text-primary' : 'text-text'
          }`}
        >
          {item?.header}
        </AccordionHeader>
        <AccordionBody
          style={
            index === data.length - 1
              ? {
                  borderBottomLeftRadius: '8px',
                  borderBottomRightRadius: '8px',
                  lineHeight: '2rem',
                }
              : {
                  lineHeight: '2rem',
                }
          }
          className="py-1 px-3   text-sm bg-primary25 text-white"
        >
          {item?.body}
        </AccordionBody>
      </Accordion>
    ))
  );
};

export default SICAccordion;
