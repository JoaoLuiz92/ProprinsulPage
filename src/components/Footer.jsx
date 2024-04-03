import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer id='Footer'>
    <div className="social-icons flex p-4 gap-4 justify-center">
      <a href="https://www.instagram.com/proprinsulextintores/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className='w-6 h-6' />
      </a>
      <a href="https://wa.me/555332255270" target="blank" rel="noopener noreferrer">
        <FaWhatsapp className='w-6 h-6' />
      </a>
      <a href="https://www.facebook.com/proprinsulextintores" target="_blank" rel="noopener noreferrer">
        <CiFacebook className='w-6 h-6'/>
      </a>
    </div>
    <p className='font-serif font-bold text-center'>&copy; 2024 Proprinsul Ltda. Todos os direitos reservados.</p>
    
    <div className='flex flex-col justify-end items-center'>
      <p className=' font-light text-end pr-6 pt-2'>
        Desenvolvedor João L. Da Rosa Jr
      </p>
      <div>
        <a href="https://www.linkedin.com/in/joão-luiz-da-rosa-junior-69889521b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='w-6 h-6'/>
        </a>
      </div>
    </div>
  </footer>
    );
};

export default Footer