import { ChangeEvent, useState } from 'react';

export const useInput = () => {
   const [value, setValue] = useState('');

   const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
   };

   return { value, changeHandler };
};
