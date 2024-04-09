import { TheFooter } from '../components/footer';
import { TheHeader } from '../components/header';
import './styles.scss';

export const App = () => {
   return (
      <div className="wrapper">
         <TheHeader />
         <main className="main">test</main>
         <TheFooter />
      </div>
   );
};
