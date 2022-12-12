import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footers flex justify-center gap-6  border-t-orange-50 py-10'>
            <a target="_blank" rel='noreferrer' href="https://github.com/DevAsFahim"><FaGithub className='icon'></FaGithub></a>
            <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/dev-as-fahim/"><FaLinkedin className='icon'></FaLinkedin></a>
            <FaTwitter className='icon'></FaTwitter>
        </div>
    );
};

export default Footer;