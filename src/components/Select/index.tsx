import ChevronDown from '@components/icons/ChevronDown';
import { Button, Collapse, Card, List, ListItem, Checkbox, Typography } from '@material-tailwind/react';
import React from 'react';

export type SelectDataType = {
  label: string;
  value: string;
};

type SelectType = {
  label: string;
  data: Array<SelectDataType>;
  value: string | Array<string>;
  onChangeSelect?: any;
  onChangeMultiSelect?: any;
  multiple?: boolean;
  name?: string;
};

const SICSelect = ({
  label,
  data,
  value = '' || [],
  onChangeSelect,
  multiple = false,
  onChangeMultiSelect,
  ...props
}: SelectType) => {
  const [toggleCollapse, setToggleCollapse] = React.useState<boolean>(false);

  const handleSelect = (value: string) => {
    onChangeSelect && onChangeSelect(value);
    if (multiple && onChangeMultiSelect) {
      onChangeMultiSelect(value);
    }
    !multiple && setToggleCollapse(false);
  };

  const toggleOpenCollapse = () => {
    setToggleCollapse(!toggleCollapse);
  };

  const getValueLabel = () => {
    if (typeof value === 'string') {
      return value === '' ? label : data.find((item) => item.value === value)?.label;
    } else if (value.length === 0) {
      return label;
    } else {
      return value.map((_v) => data.find((item) => item.value === _v)?.label).join(', ');
    }
  };

  return (
    <div className="w-full relative">
      <Button
        onClick={toggleOpenCollapse}
        ripple={false}
        className="font-mono text-sm w-full py-2 px-3 capitalize hover:shadow-primary shadow-none text-left flex justify-between bg-dark-main border border-text color-text focus:outline-none font-light text-text"
        style={
          toggleCollapse
            ? {
                borderBottomLeftRadius: '0px',
                borderBottomRightRadius: '0px',
              }
            : {}
        }
      >
        {getValueLabel()}
        <ChevronDown
          style={{
            transform: toggleCollapse ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'all .3s',
          }}
        />
      </Button>
      <Collapse className="absolute top-full" open={toggleCollapse}>
        <Card
          className="w-full bg-text"
          style={{
            borderTopLeftRadius: '0px',
            borderTopRightRadius: '0px',
          }}
        >
          <List>
            {data.length > 0 &&
              data.map((item, index) =>
                !multiple ? (
                  <ListItem
                    className="font-mono text-sm text-white px-1 py-2"
                    key={index}
                    onClick={() => handleSelect(item.value)}
                  >
                    {item.label}
                  </ListItem>
                ) : (
                  <Checkbox
                    name={props?.name || ''}
                    color="orange"
                    id={`${index}`}
                    className="px-1 py-1 rounded-none w-3.5 h-3.5"
                    key={index}
                    label={<Typography className="font-mono text-sm text-white">{item.label}</Typography>}
                    ripple={false}
                    checked={getValueLabel()?.includes(item.label)}
                    onChange={() => handleSelect(item.value)}
                  />
                ),
              )}
          </List>
        </Card>
      </Collapse>
    </div>
  );
};

export default SICSelect;
