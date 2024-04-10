import { FC, HTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.scss';
import { getClasses } from '../../../helpers/get-classes';

interface Props extends HTMLAttributes<HTMLButtonElement> {
   title: string;
   type?: 'button' | 'link';
   href?: string;
   disabled?: boolean;
   className?: string;
   icon?: ReactNode;
}

export const MyButton: FC<Props> = ({
   title,
   type = 'button',
   href,
   className,
   icon,
   ...props
}) => {
   const classes = getClasses({ mainClassName: styles.button, className });

   return (
      <button className={classes} {...props}>
         <span>{type === 'link' ? <a href={href}>{title}</a> : title}</span>
         {icon && <span>{icon}</span>}
      </button>
   );
};
