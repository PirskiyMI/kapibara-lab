import { FC } from 'react';

import styles from './styles.module.scss';

export const HeaderNav: FC = () => {
   return (
      <nav className={styles.nav}>
         <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
               <a href="#laboratory" className={styles.nav__link}>
                  Лаборатория
               </a>
            </li>
            <li className={styles.nav__item}>
               <a href="#gallery" className={styles.nav__link}>
                  Галерея
               </a>
            </li>
            <li className={styles.nav__item}>
               <a href="#feedback" className={styles.nav__link}>
                  Оставить заявку
               </a>
            </li>
         </ul>
      </nav>
   );
};
