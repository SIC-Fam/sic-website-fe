import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';
import ArrowRight from '@components/icons/ArrowRight';

interface SICButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'inherit';
  variant?: 'outlined' | 'text';
  className?: string;
}

const SICButton = ({ color = 'primary', variant = 'outlined', children, className = '', ...props }: SICButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        {
          [styles[`btn-${color}-outlined`] as string]: variant === 'outlined',
        },
        {
          [styles[`btn-${color}-text`] as string]: variant === 'text',
        },
        ['flex items-center justify-center'],
        [className],
      )}
    >
      {children}
      {variant !== 'text' && <ArrowRight className={styles['btn-icon']} />}
    </button>
  );
};

export default SICButton;
