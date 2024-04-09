import { FC } from 'react';
import DefLogo from './assets/def-logo.svg?react';
import AltLogo from './assets/alt-logo.svg?react';

interface Props {
   type?: 'default' | 'alternative';
}

export const Logo: FC<Props> = ({ type = 'default' }) => {
   return <>{type === 'default' ? <DefLogo /> : <AltLogo />}</>;
};
