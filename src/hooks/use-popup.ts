import { useState } from 'react';

export const usePopup = () => {
   const [isPopup, setIsPopup] = useState(false);

   const showPopup = () => setIsPopup(true);
   const hidePopup = () => setIsPopup(false);

   return { isPopup, showPopup, hidePopup };
};
