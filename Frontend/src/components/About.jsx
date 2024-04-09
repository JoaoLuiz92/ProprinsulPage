import React from 'react'





const About = () => {

  return (
    <section id="About" style={{
      background:'rgb(142, 22, 23)'
    }} >
    <div 
       className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center ">
      <div className="lg:flex-grow font-serif md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center animate-fade">
        <h1 className="title-font sm:text-4x1  text-3xl mb-4  text-white">
          Somos a <span className='font-bold font-serif'>Proprinsul Extintores</span>
          <br className="hidden lg:inline-block" />
          Especialistas em prevenção <br/>contra incêndios
        </h1>

       <p className="mb-8 leading-relaxed font-sans text-white">
        Sejam bem vindos à Proprinsul Extintores, referência no sul do
        Rio Grande do Sul nas áreas de prevenção e combate a incêndios.
        Há mais de 45 anos no mercado, fornecemos soluções completas e 
        adaptáveis à necessidade de cada cliente, desde projetos iniciais de emissão de alvará dos Bombeiros a execuções mais completas
         com hidrante, SPDA, sprinklers, serralheria e outros.
        Fundada em 1976, a empresa hoje conta com mais de 30 colaboradores e frota com 09 veículos. A matriz fica em Pelotas e a 
        filial na cidade de Rio Grande, com amplo atendimento por toda a região sul do RS e alguns clientes espalhados pelo Brasil inteiro.
        Converse conosco e entenda como podemos atendê-lo!
        </p>
        <div className="flex justify-center font-sans">
          <button
            href="#projects"
            className=" border-none rounded-lg text-white bg-blue-900 py-2 px-6 
            text-lg shadow-lg transition ease-in-out delay-150 hover:-translate-y-1
            hover:scale-110 hover:text-black hover:bg-white duration-500">
            Quem Somos 
          </button>
      </div>
     </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 animate-fade" id="imgAbout" >
        <img
          className="object-cover object-center rounded origin-center "
          alt="hero"
          src="./public/img/aboutpicture.jpg"
          
        />
      </div>
    </div>
  </section>
  )
}

export default About