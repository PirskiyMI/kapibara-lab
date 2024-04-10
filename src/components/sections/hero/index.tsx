import { FC } from 'react';

import capybaraImage from 'src/assets/images/capybara.png';

import styles from './styles.module.scss';
import { HeroTitle } from './hero-title';

export const Hero: FC = () => {
   return (
      <section className={styles.hero}>
         <div className={`${styles.hero__container} container`}>
            <HeroTitle className={styles.hero__title} />
            <img
               src={capybaraImage}
               alt="Изображение ученого-капибары"
               className={styles.hero__image}
            />
         </div>
      </section>
   );
};
