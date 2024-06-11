import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Sharan Poojari</h4>
      <h4>Copyright &copy; 2023 SRP</h4>
      <div className='footerLinks'>
        <a href="https://github.com/SharanRP" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/sharan-poojari-582656258/" target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a href='mailto:sharanrp35@gmail.com' target='_blank' rel="noreferrer"><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer