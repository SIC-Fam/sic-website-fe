import ChevronDown from '@components/icons/ChevronDown';
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';
import { useState } from 'react';

type AccordionType = {
  header: string;
  body: string;
};

type AccordionListType = {
  data: Array<AccordionType>;
};

const SICAccordion = (props: AccordionListType) => {
  const { data } = props;
  const [toggleOpen, setToggleOpen] = useState<number | null>(null);

  const handleToggleOpen = (value: number) => {
    setToggleOpen((prev) => (prev === value ? null : value));
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
      className="font-mono"
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
        className={`hover:text-primary py-1 px-3 border border-text text-sm font-mono ${
          toggleOpen === 0 ? 'text-primary' : 'text-text'
        }`}
      >
        {data[0]?.header}
      </AccordionHeader>
      <AccordionBody
        style={{
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
        }}
        className="py-1 px-3 text-text font-mono text-sm bg-text text-white"
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
        className="font-mono"
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
          className={`hover:text-primary py-1 px-3 border border-text text-sm font-mono ${
            toggleOpen === index ? 'text-primary' : 'text-text'
          }`}
        >
          {item?.header}
        </AccordionHeader>
        <AccordionBody
          style={
            index === data.length - 1 && {
              borderBottomLeftRadius: '8px',
              borderBottomRightRadius: '8px',
            }
          }
          className="py-1 px-3 text-text font-mono text-sm bg-text text-white"
        >
          {item?.body}
        </AccordionBody>
      </Accordion>
    ))
  );
};

export default SICAccordion;
