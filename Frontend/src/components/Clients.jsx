import React,{useState,useEffect} from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GiNotebook } from "react-icons/gi";

const Clients = () => {

    const [selectedImage,setSelectedImage] = useState(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


    gsap.from('#Climg', {
      opacity: 0,
      x: -100,
      duration: 3,
      scrollTrigger: {
        trigger: '#Climg',
        start: 'top 80%', 
        end: 'top 50%', 
        scrub: true,
      },
    });



    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill(true);
      });
    };
  }, []); 

  const openPopup = (imagePath, setSelectedImage) => {
    console.log('Abrindo popup para:', imagePath);
    setSelectedImage(imagePath);
  };
  
  const closePopup = (setSelectedImage) => {
    setSelectedImage(null);
  };
 
   const data =
   { Area:30000,
    Training:5000,
    Recharge: + 1000,
    Cities:300,
  }



  return (
    <section className='bg-white '  id='Clients'>
      <div className="  flex flex-col items-center text-center ">
        <h1 className="title-font sm:text-4x1 text-[40px] mx-auto mb-4 pb-16 pt-8 font-medium text-black">
          Nossos Clientes
        </h1>
          <div className='flex items-center p-4 space-x-4 md:space-x-10 space-y-4 md:space-y-10 flex-wrap lg:flex-no-wrap justify-around mx-auto' id="Climg" >
          <img className='w-full mb-4 md:w-40  shadow-sm border-r-2 rounded-lg items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/yaraa.png' alt=''/>
          <img className='w-full mb-4 md:w-40  shadow-sm border-r-2 rounded-lg items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/aes.png' alt=''/>
          <img className='w-full mb-4 md:w-40  shadow-sm border-r-2 rounded-lg items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/bunge.png ' alt=''/>
          <img className='w-full mb-4 md:w-40  shadow-sm border-r-2 rounded-lg items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/ccgl.png' alt=''/>
          <img className='w-full mb-4 md:w-40  shadow-sm border-r-2 rounded-lg items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/embaixador.png' alt=''/>
          <img className='w-full mb-4 md:w-40  shadow-sm border-r-2 rounded-lg items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/josapar.png' alt=''/>
          <img className='w-full mb-4 md:w-40  shadow-sm border-r-2 rounded-lg items-center transition duration-300 transform hover:scale-105 hover:border-blue-500 'src='./public/img/prefeiturapelotas.png' alt=''/>
          <img className='w-full mb-4 md:w-40  shadow-sm border-r-2 rounded-lg items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/prefeiturariogrande.png' alt=''/>
          <img className='w-full mb-4 md:w-40  shadow-sm border-r-2 rounded-lg items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/rgfert.png' alt=''/>
          <img className='w-full mb-4 md:w-40  shadow-sm border-r-2 rounded-lg items-center transition duration-300 transform hover:scale-105 hover:border-blue-500'src='./public/img/pirafert.png' alt=''/>
          <img className='w-full mb-4 md:w-40  shadow-sm border-r-2 rounded-lg items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/unifert.png' alt=''/>
          <img className='w-full mb-4 md:w-40  shadow-sm border-r-2 rounded-lg items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/tanac.png' alt=''/>
          <img className='w-full mb-4 md:w-40  shadow-sm border-r-2 rounded-lg items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/csn.png' alt=''/>
          <img className='w-full mb-4 md:w-40  shadow-sm border-r-2 rounded-lg items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/sj.png' alt=''/>
          <img className='w-full mb-4 md:w-40  shadow-sm border-r-2 rounded-lg items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/espacoutil.png' alt=''/>
          <img className='w-full mb-4 md:w-40  shadow-sm border-r-2 rounded-lg items-center transition duration-300 transform hover:scale-105 hover:border-blue-500' src='./public/img/shopppraca.png' alt=''/>
        </div>
        </div>
        <div className='title-font text-xl md:text-2xl mb-4 pt-10 pb-4 font-medium 
        text-white text-center'>
        <p className='pb-8' style={{
          background:'rgb(0, 53, 96)'
        }} >
          <br className="hidden lg:inline-block" />
          Deixe-nos tornar as coisas melhores para você. Garantimos a nossa responsabilidade.<br/>
          </p>
          </div>
    <section>
          <div className='title-font text-2xl md:text-3xl mb-4 pt-0 pb-4 font-serif text-black text-center'>
            <p>
            Nossa história fala por nós.<span className='font-bold font-sans pl-40'><br/>Nossos números, também.</span>
            </p>
            </div>
        <div className='shadow-lg '>
            <div className="p-4 bg-white w-full rounded-lg ">
             <ul className=" flex justify-around " >

            <li className="flex justify-between text-center items-center" >
              <div className=' rounded-full w-[20px] h-[200px]'style={{background:'rgb(142, 22, 23)'}} ></div>
                <div className='flex flex-col'>
                  <span className='font-bold m-4 text-[30px] text-black w-full'>Áreas Regularizadas</span>
                  <span className='font-medium text-black w-full text-[30px]'>{data.Area} m²</span>
                  </div>
              </li>
                <li className="flex p-8 justify-between rounded-lg text-center items-center">
                <div className='rounded-full w-[20px] h-[200px]'style={{background:'rgb(142, 22, 23)'}} ></div>
                <div className='flex flex-col'>
                  <span className='font-bold m-4 text-[30px] text-black w-full'>Treinamentos</span>
                  <span className='font-medium text-black text-[25px]'>{data.Training}</span>
                </div>
                </li>

                <li className="flex p-8 justify-between rounded-lg text-center items-center">
                <div className='rounded-full w-[20px] h-[200px]'style={{background:'rgb(142, 22, 23)'}} ></div>
                <div className='flex flex-col'>
                  <span className='font-bold m-4 text-[30px] text-black w-full'>Recargas</span>
                  <span className='font-medium text-black text-[25px]'>{data.Recharge}</span>
                </div>
                </li>

                <li className="flex p-10 justify-between rounded-lg text-center items-center">
                <div className='rounded-full w-[20px] h-[200px]'style={{background:'rgb(142, 22, 23)'}} ></div>
                <div className='flex flex-col'>
                  <span className='font-bold m-4 text-[30px] text-black w-full'>Cidades</span>
                  <span className='font-medium text-black text-[25px]'>{data.Cities} </span>
                </div>
                </li>

              </ul>
            </div>
        </div>
            

            <div className='text-lg md:text-2xl mx-auto mb-4 pb-4 font-medium text-black text-center'>
            <p className='pt-4 pl-4 mx-auto'>
              Temos uma grande preocupação com a satisfação dos nosso clientes.
            </p>
            <p className='pl-10'>
              Abaixo, veja alguns depoimentos de clientes e o cuidado de nossa equipe especializada em atendimento pós venda.
            </p>

            <div className=' flex flex-col items-center text-center align-top'>
            <div className='flex w-full md:w-[220vh] items-center p-4 space-x-4 md:space-x-10 space-y-4 md:space-y-10 flex-wrap lg:flex-no-wrap justify-around mx-auto' id='Climg'>
          {['dp1.png', 'dp2.png', 'dp3.png', 'dp4.png', 'dp5.png', 'dp6.png', 'dp7.png'].map((image, index) => (
            <img
              key={index}
              onClick={() => openPopup(`./public/img/${image}`, setSelectedImage)}
              className='lg:w-[300px] w-full mb-4 pl-2 mx-10 cursor-pointer shadow-sm border-r-2 items-center transition duration-300 transform hover:scale-105 hover:border-blue-500'
              src={`./public/img/${image}`}
              alt=''
            />
          ))}
        </div>            
        </div>
        </div>
        </section>
        
        {selectedImage && (
        <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-r-8 rounded-g p-8 z-50'>
          <div className='popup-content'>
            <img src={selectedImage} alt='Popup Image' />
            <button className='border-none rounded-lg text-white bg-blue-900 py-2 px-6 text-lg shadow-lg transition hover:scale-110 hover:text-black hover:bg-white' onClick={() => closePopup(setSelectedImage)}>Fechar</button>
          </div>
        </div>
        )}

    </section>
    
  )
}
/*        <div className='flex justify-center' >
            <span className='flex text-black'>
          <li className="pl-2 text-left font-serif text-[15] text-black" id="sv4">
            80.317,26 m² de Área regularizada;</li>
          </span>

          <span className='flex text-black '>
            <li className=" pl-2 text-left font-serif text-[15] text-black" id="sv4">
            Treinamentos;</li>
          </span>

          <span className='flex text-black '>
            <li className=" pl-2 text-left font-serif text-[15] text-black" id="sv4">Recargas;</li>
          </span>

          <span className='flex text-black '>
            <li className=" pl-2 text-left font-serif text-[15] text-black" id="sv4">Cidades;</li>
          </span>
         </div>*/

export default Clients