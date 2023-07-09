import React from 'react';
import SICInput from '@components/Input';
import { snakeCase } from 'lodash';

import styles from './inputLabel.module.scss';
import clsx from 'clsx';

interface InputBoxProps {
  isRequired: boolean;
  errorLabel?: string;
  placeholder: string;
  value: string;
  name: string;
  onChange: any;
  error?: boolean;
  type?: string;
}

interface InputLableProps {
  text: string;
  isRequired?: boolean;
}

export const InputLable = ({ text, isRequired }: InputLableProps) => {
  return (
    <div className={clsx(styles['input-label'])}>
      {text} <span className="text-error pl-1">{isRequired && '*'}</span>
    </div>
  );
};

const InputBox = ({
  type,
  isRequired,
  errorLabel,
  placeholder,
  value,
  name,
  onChange,
  error,
  ...props
}: InputBoxProps) => {
  return (
    <div {...props}>
      <InputLable isRequired={isRequired} text={`Your ${snakeCase(name).replace(/_/g, ' ')}`} />
      <SICInput
        name={name}
        errorLabel={errorLabel}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
        type={type || 'text'}
      />
    </div>
  );
};

export default InputBox;
