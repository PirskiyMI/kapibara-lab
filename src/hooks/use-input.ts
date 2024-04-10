import { ChangeEvent, useState } from 'react';

const reg = new RegExp(/[^a-zA-Za-яА-ЯёЁ]/g);

export const useInput = () => {
   const [value, setValue] = useState('');
   const [isVisited, setIsVisited] = useState(false);

   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value.replace(reg, ''));
   };

   const onBlur = () => {
      setIsVisited(true);
   };

   const clearInput = () => {
      setValue('');
      setIsVisited(false);
   };

   return { value, isVisited, onChange, onBlur, clearInput };
};
