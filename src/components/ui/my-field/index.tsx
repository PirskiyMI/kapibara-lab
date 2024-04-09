import { FC, HTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface Props extends HTMLAttributes<HTMLInputElement> {
   placeholder?: string;
}

export const MyField: FC<Props> = ({ placeholder, ...props }) => {
   return (
      <input
         placeholder={placeholder}
         {...props}
         className={`${styles.field} ${styles.field_error}`}
      />
   );
};
