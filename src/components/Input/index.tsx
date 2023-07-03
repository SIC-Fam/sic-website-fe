import clsx from 'clsx';
import React, { InputHTMLAttributes } from 'react';

interface SICInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const SICInput = ({ error = false, ...props }: SICInputProps) => {
  return (
    <input
      className={clsx(
        'border bg-transparent py-2 px-4 w-full rounded-lg outline-none',
        error ? 'border-error focus:border-error placeholder:text-error' : 'focus:border-primary border-text',
        props?.className,
      )}
      {...props}
    />
  );
};

export default SICInput;
