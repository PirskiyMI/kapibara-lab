import { TheFooter } from '../components/footer';
import { TheHeader } from '../components/header';
import { Hero } from '../components/hero';
import { Introduction } from '../components/introduction';
import './styles.scss';

export const App = () => {
   return (
      <div className="wrapper">
         <TheHeader />
         <main className="main">
            <Hero />
            <Introduction />
         </main>
         <TheFooter />
      </div>
   );
};
