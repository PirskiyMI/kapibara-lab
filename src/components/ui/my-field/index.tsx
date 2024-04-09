import { FC, HTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { getClasses } from '../../../helpers/get-classes';

interface Props extends HTMLAttributes<HTMLInputElement> {
   value: string;
   className?: string;
   placeholder?: string;
}

export const MyField: FC<Props> = ({ value, placeholder, className, ...props }) => {
   const classes = getClasses({ mainClassName: styles.field, className });

   return <input value={value} placeholder={placeholder} {...props} className={classes} />;
};
