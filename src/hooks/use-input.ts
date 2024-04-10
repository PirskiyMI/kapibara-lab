import { ChangeEvent, useCallback, useState } from 'react';

export const useInput = (regExp?: RegExp) => {
   const [value, setValue] = useState('');
   const [isVisited, setIsVisited] = useState(false);

   const onChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
         regExp ? setValue(e.target.value.replace(regExp, '')) : setValue(e.target.value);
      },
      [regExp],
   );

   const onBlur = useCallback(() => {
      setIsVisited(true);
   }, []);

   const clearInput = useCallback(() => {
      setValue('');
      setIsVisited(false);
   }, []);

   return { value, isVisited, onChange, onBlur, clearInput };
};
