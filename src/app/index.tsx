import { useState } from 'react';
import { MyButton } from '../components/ui/my-button';
import { MyField } from '../components/ui/my-field';
import { PopUp } from '../components/ui/pop-up';
import './styles.scss';

export const App = () => {
   const [isPopup, setIsPopup] = useState<boolean>(false);

   const showPopup = () => setIsPopup(true);
   const closePopup = () => setIsPopup(false);

   return (
      <>
         <MyButton title="Test" onClick={showPopup} />
         <MyField placeholder="Field-test" />
         {isPopup && <PopUp closePopup={closePopup}>Test</PopUp>}
      </>
   );
};
