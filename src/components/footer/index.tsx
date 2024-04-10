import { FC } from 'react';

import { Logo } from 'src/components/ui/logo';

import styles from './styles.module.scss';

export const TheFooter: FC = () => {
   return (
      <footer className={styles.footer}>
         <div className={`${styles.footer__container} container`}>
            <Logo type="alternative" className={styles.footer__logo} />
            <div className={styles.footer__copyright}>
               Все права защищены Российской Ассоциацией Капибар
            </div>
         </div>
      </footer>
   );
};
