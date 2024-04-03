import Nav from './components/Navbar';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Clients from './components/Clients';
import Email from './components/email';
import Footer from './components/Footer';



function App() {
  return (
    <main >
        <div>
          <Nav/>
        </div>
        <div>
          <About/>
        </div>
        <div>
          <Services/>
        </div>
        <div>
          <Clients/>
        </div>
        <div>
          <Contact/>
        </div>
        <div>
          <Email/>
        </div>
        <div>
          <Footer/>
        </div>
   </main>
  )
}

export default App
