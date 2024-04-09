import { FC, HTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.scss';

interface Props extends HTMLAttributes<HTMLButtonElement> {
   title: string;
   type?: 'button' | 'link';
   icon?: ReactNode;
}

export const MyButton: FC<Props> = ({ title, type = 'button', icon, ...props }) => {
   return (
      <button className={styles.button} {...props}>
         <span>{type === 'link' ? <a href="#">{title}</a> : title}</span>
         {icon && <span>{icon}</span>}
      </button>
   );
};
