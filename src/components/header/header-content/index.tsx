import { FC } from 'react';
import { Logo } from '../../ui/logo';
import styles from './styles.module.scss';

export const HeaderContent: FC = () => {
   return (
      <div className={styles.content}>
         <Logo />
         <div className={styles.content__title}>Современные методики диагностики</div>
      </div>
   );
};
