import styles from './style';
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";


function App() {
  return (
    <div className="App bg-black">
     <div className={`${styles.paddingX} ${styles.flexCenter}`} >
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
     </div>

    <div className={`bg-black  ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
          <Hero />
      </div>
    </div>


    <div className={`bg-black text-white ${styles.flexStart} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>


    </div>
  );
}

export default App;
