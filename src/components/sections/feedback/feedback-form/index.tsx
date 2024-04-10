import { FormEvent, lazy } from 'react';

import { textRegExp } from 'src/constant/reg-exp';
import { useInput } from 'src/hooks/use-input';
import { usePopup } from 'src/hooks/use-popup';
import { MyButton } from 'src/components/ui/my-button';
import { MyField } from 'src/components/ui/my-field';
import CheckmarkIcon from 'src/assets/icons/checkmark-icon.svg?react';
import popupCheckmark from 'src/assets/icons/popup-checkmark-icon.svg';

const LazyPopup = lazy(async () => {
   const { PopUp } = await import('src/components/ui/pop-up');
   return { default: PopUp };
});

import styles from './styles.module.scss';

export const FeedbackForm = () => {
   const { isPopup, showPopup, hidePopup } = usePopup();
   const { clearInput: clearName, ...name } = useInput(textRegExp);
   const { clearInput: clearSurname, ...surname } = useInput(textRegExp);
   const { clearInput: clearPatronymic, ...patronymic } = useInput(textRegExp);

   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const sub = new Promise((res) => {
         setTimeout(() => {
            res(showPopup());
         }, 1000);
      });
      sub.then(() =>
         setTimeout(() => {
            hidePopup();
         }, 4000),
      ).finally(() => {
         clearSurname();
         clearName();
         clearPatronymic();
      });
   };

   return (
      <>
         <form onSubmit={onSubmit} className={styles.form}>
            <div className={styles.form__fields}>
               <MyField placeholder="Фамилия" className={styles.form__field} {...surname} />
               <MyField placeholder="Имя" className={styles.form__field} {...name} />
               <MyField placeholder="Отчество" className={styles.form__field} {...patronymic} />
            </div>
            <MyButton
               disabled={!surname.value || !name.value || !patronymic.value}>
               <span>Отправить</span>
               <CheckmarkIcon />
            </MyButton>
         </form>
         {isPopup && (
            <LazyPopup closePopup={hidePopup}>
               <div className={styles.popup}>
                  <img src={popupCheckmark} alt="Изображение галочки" />
                  <p className={styles.popup__text}>
                     Спасибо за предоставленную информацию, мы свяжемся с вами в ближайшее время.
                  </p>
               </div>
            </LazyPopup>
         )}
      </>
   );
};
