import clsx from 'clsx';
import React, { LabelHTMLAttributes } from 'react';
import styles from '../../../styles/tag.module.scss';

interface SICTagProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, 'children'> {
  type: 'item' | 'head';
  children: string;
}

const SICTag = ({ type = 'item', children, ...props }: SICTagProps) => {
  return (
    <label className={clsx(styles[`tag-${type}`])} {...props}>
      {children}
    </label>
  );
};

export default SICTag;
