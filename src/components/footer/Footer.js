import React from 'react';
import './FooterStyles.css';
import {BsFacebook, BsInstagram, BsTwitter, BsGithub, BsLinkedin} from "react-icons/bs"

function Footer() {
    return (
        <div className="footer">
            <div>
                <div className="social-icons-container">
                    <a href="https://www.facebook.com/bolestan/"><BsFacebook className='icon' /> </a>
                    <a href="https://www.instagram.com/bskmrkvc/"><BsInstagram className='icon' /> </a>
                    <a href="https://www.twitter.com/bxskx"><BsTwitter className='icon' /> </a>
                    <a href="https://www.github.com/bskmrkvc"><BsGithub className='icon' /> </a>
                    <a href="https://www.linkedin.com/in/bosko-markovic-0884a5163"><BsLinkedin className='icon' /> </a>
                </div>  
            </div>

            <div className="footer-text-container">
                <h4 className="footer-text">Statify ©, 2022</h4>
            </div>
        </div>
    );
}

export default Footer;
