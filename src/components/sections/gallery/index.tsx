import { FC } from 'react';

import ImageOne from 'src/assets/images/gallery-1.jpeg';
import ImageTwo from 'src/assets/images/gallery-2.jpeg';
import ImageThree from 'src/assets/images/gallery-3.jpeg';
import ImageFour from 'src/assets/images/gallery-4.jpeg';
import ImageFive from 'src/assets/images/gallery-5.jpeg';
import ImageSix from 'src/assets/images/gallery-6.jpeg';
import ImageSeven from 'src/assets/images/gallery-7.jpeg';

import styles from './styles.module.scss';

export const Gallery: FC = () => {
   return (
      <section id="gallery" className={styles.gallery}>
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
