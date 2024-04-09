import { FC } from 'react';
import TelIcon from './../assets/phone-icon.svg?react';
import styles from './styles.module.scss';

export const HeaderSocial: FC = () => {
   return (
      <a href="+71234567890" className={styles.tel}>
         <TelIcon className={styles.tel__icon} />
         <div className={styles.tel__body}>
            <span>+7 123 456 7890</span>
            <span className={styles.tel__label}>Звонок бесплатный</span>
         </div>
      </a>
   );
};
