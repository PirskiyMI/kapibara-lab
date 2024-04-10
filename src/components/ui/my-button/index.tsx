import { FC, HTMLAttributes, ReactNode, memo } from 'react';

import { getClasses } from 'src/helpers/get-classes';

import styles from './styles.module.scss';

interface Props extends HTMLAttributes<HTMLButtonElement> {
   children: ReactNode;
   className?: string;
   href?: string;
   disabled?: boolean;
}

export const MyButton: FC<Props> = memo(({ children, href, className, ...props }) => {
   const classes = getClasses({ mainClassName: styles.button, className });

   return (
      <>
         {!href ? (
            <button className={classes} {...props}>
               {children}
            </button>
         ) : (
            <a href={href} className={classes}>
               {children}
            </a>
         )}
      </>
   );
});
