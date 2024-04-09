import { Feedback } from '../components/feedback';
import { TheFooter } from '../components/footer';
import { Gallery } from '../components/gallery';
import { TheHeader } from '../components/header';
import { Hero } from '../components/hero';
import { Introduction } from '../components/introduction';
import { Laboratory } from '../components/laboratory';
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
