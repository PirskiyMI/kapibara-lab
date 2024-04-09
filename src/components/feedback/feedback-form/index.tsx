import { useInput } from '../../../hooks/use-input';
import { MyButton } from '../../ui/my-button';
import { MyField } from '../../ui/my-field';
import styles from './styles.module.scss';

export const FeedbackForm = () => {
   const { value: surname, changeHandler: changeSurname } = useInput();
   const { value: name, changeHandler: changeName } = useInput();
   const { value: patronymic, changeHandler: changePatronymic } = useInput();

   return (
      <form className={styles.form}>
         <div className={styles.form__fields}>
            <MyField
               value={surname}
               placeholder="Фамилия"
               onChange={changeSurname}
               className={styles.form__field}
            />
            <MyField
               value={name}
               placeholder="Имя"
               onChange={changeName}
               className={styles.form__field}
            />
            <MyField
               value={patronymic}
               placeholder="Отчество"
               onChange={changePatronymic}
               className={styles.form__field}
            />
         </div>
         <MyButton title="Отправить" className={styles.form__button} />
      </form>
   );
};
