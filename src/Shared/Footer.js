import React from 'react';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail, HiPhoneOutgoing } from 'react-icons/hi';
import logo from '../Assets/Logo/repliQFinalLogo.png';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <img src={logo} alt="siteLogo" className='w-24' />
                <p>RepliQ Shop<br />Providing reliable tech since 2023</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">UI Design</a>
                <a className="link link-hover">User Experiences</a>
                <a className="link link-hover">Web Applications</a>
            </div>
            <div>
                <span className="footer-title">Contacts</span>
                <a href='tel: +8801851072581' className="link link-hover flex items-center"><HiPhoneOutgoing className='mr-2' /> +8801851072581</a>
                <a href='mailto: kaisertanveer0@gmai.com' className="link link-hover flex items-center"><HiOutlineMail className='mr-2' /> kaisertanveer0@gmai.com</a>
                <a href='https://www.linkedin.com/in/kaiser-tanveer/' target='_blank' className="link link-hover flex items-center"><FaLinkedinIn className='mr-2' /> https://www.linkedin.com/in/kaiser-tanveer/</a>
                <a href='https://github.com/Kaiser-Tanveer' className="link link-hover flex items-center"><FaGithubAlt className='mr-2' />https://github.com/Kaiser-Tanveer</a>
            </div>
            <div>
                <span className="footer-title">Resources</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Client Side Code</a>
                <a className="link link-hover">Server Side Code</a>
            </div>
        </footer>
    );
};

export default Footer;