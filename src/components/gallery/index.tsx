import { FC } from 'react';
import ImageOne from './assets/image-1.jpeg';
import ImageTwo from './assets/image-2.jpeg';
import ImageThree from './assets/image-3.jpeg';
import ImageFour from './assets/image-4.jpeg';
import ImageFive from './assets/image-5.jpeg';
import ImageSix from './assets/image-6.jpeg';
import ImageSeven from './assets/image-7.jpeg';
import styles from './styles.module.scss';

export const Gallery: FC = () => {
   return (
      <section id='gallery' className={styles.gallery}>
         <div className="container">
            <h3 className={`${styles.gallery__title} title`}>Галерея</h3>
            <div className={styles.gallery__grid}>
               <img
                  src={ImageOne}
                  alt="Изображение лаборатории"
                  className={`${styles.gallery__image} ${styles.gallery__image_1}`}
               />
               <img
                  src={ImageTwo}
                  alt="Изображение лаборатории"
                  className={`${styles.gallery__image} ${styles.gallery__image_2}`}
               />
               <img
                  src={ImageThree}
                  alt="Изображение лаборатории"
                  className={`${styles.gallery__image} ${styles.gallery__image_3}`}
               />
               <img
                  src={ImageFour}
                  alt="Изображение лабораторных иструментов"
                  className={`${styles.gallery__image} ${styles.gallery__image_4}`}
               />
               <img
                  src={ImageFive}
                  alt="Изображение лаборатории"
                  className={`${styles.gallery__image} ${styles.gallery__image_5}`}
               />
               <img
                  src={ImageSix}
                  alt="Изображение лабораторных иструментов"
                  className={`${styles.gallery__image} ${styles.gallery__image_6}`}
               />
               <img
                  src={ImageSeven}
                  alt="Изображение ученого-капибары в лаборатории"
                  className={`${styles.gallery__image} ${styles.gallery__image_7}`}
               />
            </div>
         </div>
      </section>
   );
};
