import { FC } from 'react';

import { MyButton } from 'src/components/ui/my-button';
import ArrowIcon from 'src/assets/icons/arrow-icon.svg?react';
import CapybaraImage from 'src/assets/images/capybara-scientist.jpeg';

import styles from './styles.module.scss';

export const Laboratory: FC = () => {
   return (
      <section id="laboratory" className={styles.laboratory}>
         <div className={`${styles.laboratory__container} container`}>
            <div className={styles.laboratory__body}>
               <h3 className={styles.laboratory__title}>Лаборатория</h3>
               <img
                  src={CapybaraImage}
                  alt="Изображение ученого-капибара за работой"
                  className={styles.laboratory__image}
               />
               <div className={styles.laboratory__content}>
                  <p>
                     Наша лаборатория предлагает широкий спектр медицинских исследований, проводимых
                     опытными капибарами-лаборантами. Мы специализируемся на анализе биоматериалов,
                     микробиологических исследованиях, генетической диагностике и многом другом.
                  </p>
                  <p>
                     Мы используем современное оборудование и методики и гарантируем точность и
                     надежность результатов.
                  </p>
               </div>
               <MyButton href="#feedback" className={styles.laboratory__link}>
                  <span>Оставить заявку</span>
                  <ArrowIcon className={styles.laboratory__icon} />
               </MyButton>
            </div>
            <img
               src={CapybaraImage}
               alt="Изображение ученого-капибара за работой"
               className={`${styles.laboratory__image} ${styles.laboratory__image_desktop}`}
            />
         </div>
      </section>
   );
};
