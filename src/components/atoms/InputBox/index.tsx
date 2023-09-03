import React, { InputHTMLAttributes } from 'react';
import ErrorIcon from '@components/atoms/icons/Error';
import { snakeCase } from 'lodash';

import styles from '../../../styles/inputLabel.module.scss';
import clsx from 'clsx';

interface InputBoxProps {
  isRequired?: boolean;
  errorLabel?: string;
  placeholder?: string;
  value?: string;
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
  isRequired = false,
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
        placeholder={placeholder || `Enter ${snakeCase(name).replace(/_/g, ' ')}`}
        defaultValue={value}
        onChange={onChange}
        error={error}
        type={type || 'text'}
      />
    </div>
  );
};

interface SICInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorLabel?: string;
}

const SICInput = ({ error = false, errorLabel, ...props }: SICInputProps) => {
  return (
    <>
      <input
        className={clsx(
          'border bg-transparent py-2 px-4 w-full rounded-lg outline-none text-white placeholder:text-text',
          error ? 'border-error focus:border-error placeholder:text-error' : 'focus:border-primary border-text',
          props?.className ? props.className : '',
        )}
        {...props}
      />
      {error && !!errorLabel && (
        <div className=" text-[10px] text-error italic mt-2 items-center flex">
          <ErrorIcon />
          <span className="ml-1 ">{errorLabel}</span>
        </div>
      )}
    </>
  );
};

export default InputBox;
