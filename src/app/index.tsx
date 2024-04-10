import { TheFooter } from 'src/components/footer';
import { TheHeader } from 'src/components/header';
import { Feedback } from 'src/components/sections/feedback';
import { Gallery } from 'src/components/sections/gallery';
import { Hero } from 'src/components/sections/hero';
import { Introduction } from 'src/components/sections/introduction';
import { Laboratory } from 'src/components/sections/laboratory';

import './styles.scss';

export const App = () => {
   return (
      <div className="wrapper">
         <TheHeader />
         <main className="main">
            <Hero />
            <Introduction />
            <Laboratory />
            <Gallery />
            <Feedback />
         </main>
         <TheFooter />
      </div>
   );
};
