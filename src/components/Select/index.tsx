import ChevronDown from '@components/icons/ChevronDown';
import { Button, Collapse, Card, List, ListItem, Checkbox, Typography } from '@material-tailwind/react';
import React from 'react';

type SelectDataType = {
  label: string;
  value: string;
};

type SelectType = {
  label: string;
  data: Array<SelectDataType>;
  value: string;
  onChangeSelect: any;
  multiple?: boolean;
};

const SICSelect = (props: SelectType) => {
  const { label, data, value = '', onChangeSelect, multiple = false } = props;

  const [toggleCollapse, setToggleCollapse] = React.useState(false);

  const handleSelect = (value: string) => {
    onChangeSelect && onChangeSelect(value);
    setToggleCollapse(false);
  };

  const toggleOpenCollapse = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div className="w-full">
      <Button
        onClick={toggleOpenCollapse}
        ripple={false}
        className="font-mono text-sm w-full py-2 px-3 capitalize hover:shadow-primary shadow-none text-left flex justify-between bg-dark-main border border-text color-text focus:outline-none"
        style={
          toggleCollapse
            ? {
                borderBottomLeftRadius: '0px',
                borderBottomRightRadius: '0px',
              }
            : {}
        }
      >
        {value === '' ? label : data.find((item) => item.value === value)?.label} <ChevronDown />
      </Button>
      <Collapse open={toggleCollapse}>
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
                    color="orange"
                    className="px-1 py-1 rounded-none w-3.5 h-3.5"
                    key={index}
                    label={<Typography className="font-mono text-sm text-white">{item.label}</Typography>}
                    ripple={false}
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
