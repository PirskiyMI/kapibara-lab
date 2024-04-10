import { FC } from 'react';

import styles from './styles.module.scss';
import { HeaderContent } from './header-content';
import { HeaderNav } from './header-nav';
import { HeaderSocial } from './header-social';

export const TheHeader: FC = () => {
   return (
      <header className={styles.header}>
         <div className={`${styles.header__container} container`}>
            <HeaderContent />
            <HeaderNav />
            <HeaderSocial />
         </div>
      </header>
   );
};
