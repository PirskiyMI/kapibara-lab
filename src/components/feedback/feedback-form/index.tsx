import { FormEvent } from 'react';
import { useInput } from '../../../hooks/use-input';
import { usePopup } from '../../../hooks/use-popup';
import { MyButton } from '../../ui/my-button';
import { MyField } from '../../ui/my-field';
import styles from './styles.module.scss';
import { PopUp } from '../../ui/pop-up';

export const FeedbackForm = () => {
   const { isPopup, showPopup, hidePopup } = usePopup();
   const { clearInput: clearName, ...name } = useInput();
   const { clearInput: clearSurname, ...surname } = useInput();
   const { clearInput: clearPatronymic, ...patronymic } = useInput();

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
               title="Отправить"
               className={styles.form__button}
               disabled={!surname.value || !name.value || !patronymic.value}
            />
         </form>
         {isPopup && <PopUp closePopup={hidePopup}>Test</PopUp>}
      </>
   );
};
