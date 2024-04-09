import { FC } from 'react';
import styles from './styles.module.scss';
import { FeedbackForm } from './feedback-form';

export const Feedback: FC = () => {
   return (
      <section className={styles.feedback}>
         <div className={`${styles.feedback__container} container`}>
            <div className={styles.feedback__wrapper}>
               <h3 className="title">Заявка на диагностику</h3>
               <p className={styles.feedback__text}>
                  Доверьте свои медицинские исследования надежным капибарам-лаборантам и получите
                  качественные результаты в кратчайшие сроки!
               </p>
               <FeedbackForm />
            </div>
         </div>
      </section>
   );
};
