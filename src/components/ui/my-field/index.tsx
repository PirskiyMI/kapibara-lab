import { FC, HTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { getClasses } from '../../../helpers/get-classes';

interface Props extends HTMLAttributes<HTMLInputElement> {
   value: string;
   isVisited: boolean;
   className?: string;
   placeholder?: string;
}

export const MyField: FC<Props> = ({ value, isVisited, placeholder, className, ...props }) => {
   let classes = getClasses({ mainClassName: styles.field, className });
   classes = isVisited && !value.length ? `${styles.field_error} ${classes}` : classes;

   return <input value={value} placeholder={placeholder} {...props} className={classes} />;
};
