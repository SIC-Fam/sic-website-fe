import ErrorIcon from '@components/icons/Error';
import clsx from 'clsx';
import React, { InputHTMLAttributes } from 'react';

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

export default SICInput;
