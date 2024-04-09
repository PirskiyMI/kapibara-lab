import { FC } from 'react';
import styles from './styles.module.scss';
import { Logo } from '../ui/logo';

export const TheFooter: FC = () => {
   return (
      <footer className={styles.footer}>
         <div className={`${styles.footer__container} container`}>
            <Logo type="alternative" />
            <div className={styles.footer__copyright}>
               Все права защищены Российской Ассоциацией Капибар
            </div>
         </div>
      </footer>
   );
};
