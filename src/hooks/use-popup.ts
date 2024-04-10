import { useCallback, useState } from 'react';

export const usePopup = () => {
   const [isPopup, setIsPopup] = useState(false);

   const showPopup = useCallback(() => setIsPopup(true), []);
   const hidePopup = useCallback(() => setIsPopup(false), []);

   return { isPopup, showPopup, hidePopup };
};
