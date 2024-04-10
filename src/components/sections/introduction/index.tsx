import { FC } from 'react';

import styles from './styles.module.scss';

export const Introduction: FC = () => {
   return (
      <section className={styles.intro}>
         <div className={`${styles.intro__container} container`}>
            <h1>
               Добро пожаловать в медицинскую лабораторию KapibaraLab, где работают исключительно
               капибары — ваш надежный партнер в обеспечении качественной и точной диагностики!
            </h1>
         </div>
      </section>
   );
};
