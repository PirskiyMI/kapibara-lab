import { FC } from 'react';

import styles from './styles.module.scss';
import { anchorsList } from 'src/constant/anchors';

export const HeaderNav: FC = () => {
   return (
      <nav className={styles.nav}>
         <ul className={styles.nav__list}>
            {anchorsList.map(({ id, title }) => (
               <li key={id} className={styles.nav__item}>
                  <a href={id} className={styles.nav__link}>
                     {title}
                  </a>
               </li>
            ))}
         </ul>
      </nav>
   );
};
