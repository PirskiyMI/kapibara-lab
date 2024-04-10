import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

interface Props {
   children: ReactNode;
   closePopup: () => void;
}

export const PopUp: FC<Props> = ({ children, closePopup }) => {
   return (
      <div className={styles.popup} onClick={closePopup}>
         <div
            className={styles.popup__body}
            onClick={(e) => {
               e.stopPropagation();
            }}>
            {children}
         </div>
      </div>
   );
};
