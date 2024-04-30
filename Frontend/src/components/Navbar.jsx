
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  
  const handleOpenPopup = () => {
    setPopupVisible(true);
    setErrorMessage("")
   };


  const handleClosePopup = () => {
    setPopupVisible(false);
  }

  const payload = {
    email: email,
    password: password,
  };

  const handleLogin = async () => {
    try {
    
      const response = await fetch(`http://localhost:3333/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload) 
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
  
      const data = await response.json(); 
      localStorage.setItem('token', data.token); 
      handleClosePopup(); 
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message); 
    }
  };  return (
    <header className=" bg-white md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center scroll-smooth">
      <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src='./public/img/logo.png' alt='pornp logo' className='h-20'/>
          <span className="text-2xl font-semibold dark:text-white"></span>
        </a>
        <nav className="md:mr-auto md:ml-4 p-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base font-serif justify-center">
          <a href="#About" className="p-2 hover:border-2 hover:p-1 hover:border-solid hover:rounded-lg hover:border-red-700">
            Quem Somos
          </a>
          <a href="#Services" className="p-2 hover:border-2 hover:p-1 hover:border-solid hover:rounded-lg hover:border-red-700">
            Serviços
          </a>
          <a href="#Clients" className="p-2 hover:border-2 hover:p-1 hover:border-solid hover:rounded-lg hover:border-red-700">
            
            Clientes
          </a>
          <a href="#Footer" className="p-2 hover:border-2 hover:p-1 hover:border-solid hover:rounded-lg hover:border-red-700">
            
            Contato
          </a>
          
        </nav>
        <div className="items-center flex-box justify-end">
        <a href="https://wa.me/555332255270"
         target="blank" 
         rel="noopener noreferrer"
         >
        <FaWhatsapp  className="w-10 h-10" style={{
          color: 'rgb(142, 22, 23)'
        }}/>
                <p className="underline font-medium">
          Contato: (53) 3225-5270
                  </p>
        </a>
        <div className="flex items-center font-sans mt-2">
            <button onClick={handleOpenPopup} className="border-none rounded-lg text-white bg-blue-900 py-2 px-6 text-lg shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-black hover:bg-white duration-500">
              Acesso ao Cliente
            </button>
          </div>
          {popupVisible && (
            <div id="popup" className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-8 rounded-lg">
                <h2 className="text-lg font-bold mb-4">Login</h2>
                <input type="email" placeholder="Email" className="mb-2 w-full p-2 rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Senha" className="mb-4 w-full p-2 rounded-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
                {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
                <button onClick={handleLogin} className="bg-blue-900 text-white py-2 px-6 rounded-lg">Login</button>
                <button onClick={handleClosePopup} className="bg-blue-900 text-white py-2 px-6 rounded-lg ml-2">Fechar</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}


