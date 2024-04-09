import { FC, HTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.scss';
import { getClasses } from '../../../helpers/get-classes';

interface Props extends HTMLAttributes<HTMLButtonElement> {
   title: string;
   className?: string;
   type?: 'button' | 'link';
   icon?: ReactNode;
}

export const MyButton: FC<Props> = ({ title, type = 'button', className, icon, ...props }) => {
   const classes = getClasses({ mainClassName: styles.button, className });

   return (
      <button className={classes} {...props}>
         <span>{type === 'link' ? <a href="#">{title}</a> : title}</span>
         {icon && <span>{icon}</span>}
      </button>
   );
};
