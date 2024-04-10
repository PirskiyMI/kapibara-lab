import { FC, memo } from 'react';

import DefLogo from 'src/assets/images/default-logo.svg?react';
import AltLogo from 'src/assets/images/alternative-logo.svg?react';

interface Props {
   type?: 'default' | 'alternative';
   className?: string;
}

export const Logo: FC<Props> = memo(({ type = 'default', className }) => {
   return (
      <>
         {type === 'default' ? (
            <DefLogo className={className} />
         ) : (
            <AltLogo className={className} />
         )}
      </>
   );
});
