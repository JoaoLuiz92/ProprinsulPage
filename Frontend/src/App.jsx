
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './components/homePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;











/*import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'; // Importe seu componente Dashboard
import ProtectedRoute from './components/ProtectedRoute'; // Importe seu componente de rota protegida
import Nav from './components/Navbar';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Clients from './components/Clients';
import FormFooter from './components/FormFooter';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
        <Nav/>
      <Routes>
        <Route path="/" element={
          <main>
            <About />
            <Services />
            <Clients />
            <Contact />
            <FormFooter />
            <Footer />
          </main>
        } />
         <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
     
      </Routes>
      </Router>
    );
  }
  
  export default App;
  



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
          <FormFooter/>
        </div>
        <div>
          <Footer/>
        </div>
   </main>
  )
}
export default App
*/