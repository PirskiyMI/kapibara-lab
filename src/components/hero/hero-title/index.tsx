import { FC } from 'react';
import styles from './styles.module.scss';

interface Props {
   className?: string;
}

export const HeroTitle: FC<Props> = ({ className }) => {
   const classes = className ? `${styles.title} ${className}` : styles.title;

   return (
      <h1 className={classes}>
         <span className={styles.title__header}>Точные результаты</span>
         <span className={styles.title__footer}>Точно в срок</span>
      </h1>
   );
};
