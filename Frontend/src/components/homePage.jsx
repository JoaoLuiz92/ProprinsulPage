
import About from './About';
import Services from './Services';
import Clients from './Clients';
import Contact from './Contact';
import FormFooter from './FormFooter';
import Footer from './Footer';

function HomePage() {
  return (
    <main>
      <section id="About"><About /></section>
      <section id="Services"><Services /></section>
      <section id="Clients"><Clients /></section>
      <section id="Contact"><Contact /></section>
      <FormFooter />
      <Footer />
    </main>
  );
}

export default HomePage;
