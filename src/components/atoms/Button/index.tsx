import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';
import ArrowRight from '@components/atoms/icons/ArrowRight';

interface SICButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'inherit';
  variant?: 'outlined' | 'text' | 'contained';
  className?: string;
  disabledHover?: boolean;
  isLoading?: boolean;
}

const SICButton = ({
  color = 'primary',
  variant = 'outlined',
  children,
  className = '',
  disabledHover = false,
  isLoading,
  ...props
}: SICButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        {
          [styles[`btn-${color}-text`] as string]: variant === 'text',
          [styles[`btn-${color}-contained`] as string]: variant === 'contained',
          [styles[`btn-${color}-outlined`] as string]: variant === 'outlined',
          'pointer-events-none opacity-75': isLoading,
        },
        {
          ['hover:tracking-widest']: !disabledHover,
        },
        ['flex items-center justify-center'],
        [className],
      )}
    >
      <>
        {children}
        {variant !== 'text' && <ArrowRight className={styles['btn-icon']} />}
      </>
    </button>
  );
};

export default SICButton;
