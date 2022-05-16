import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import logo from '../../assets/img/logosmall.png';

import '../navbar/NavbarStyles.css';

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (  
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className="logo-wrapper">
                <Link to="/"><img src={logo} alt="Logo" className="logo"></img></Link>
            </div> 
            {/* react router implementation in navbar*/}
            <div className="navbar-link">
                <ul className="nav-menu">
                    <Link to='/'><li>Home</li></Link>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  
                    <Link to='/search'><li>Search</li></Link>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <Link to='/teams'><li>Teams</li></Link>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <Link to='/leaders'><li>Leaders</li></Link>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                    <Link to='/about'><li>About</li></Link>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </ul>
            </div>
            {/* icons for "web view" */}
            <div className="nav-icons">
                <BiSearch className='icon' style={{ marginRight: '1rem' }} />
                <BsPerson className='icon' />
            </div>
            {/* hamburger menu for mobile view */}
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

            </div>

            {/* mobile menu navbar */}
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                {/* mobile navigation */}
                <ul className="mobile-nav">
                    <Link to='/' onClick={handleNav}><li>Home</li></Link>
                    <Link to='/search' onClick={handleNav}><li>Search</li></Link>
                    <Link to='/teams' onClick={handleNav}><li>Teams</li></Link>
                    <Link to='/leaders' onClick={handleNav}><li>Leaders</li></Link>
                    <Link to='/about' onClick={handleNav}><li>About</li></Link>
                </ul>
                {/* instead of icons, buttons are used for mobile view */}
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button className="button-text">Search</button>
                        <button className="button-text">My Account</button>
                    </div>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/bolestan/"><FaFacebook className='icon' /> </a>
                        <a href="https://www.instagram.com/bskmrkvc/"><FaInstagram className='icon' /> </a>
                        <a href="https://www.twitter.com/bxskx"><FaTwitter className='icon' /> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;