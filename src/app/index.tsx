import { TheFooter } from '../components/footer';
import { TheHeader } from '../components/header';
import { Hero } from '../components/hero';
import './styles.scss';

export const App = () => {
   return (
      <div className="wrapper">
         <TheHeader />
         <main className="main">
            <Hero />
         </main>
         <TheFooter />
      </div>
   );
};
