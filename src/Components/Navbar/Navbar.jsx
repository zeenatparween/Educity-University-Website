import React from 'react'
import { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, [])

    const [mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''} `}>
            <img src={logo} className='logo' alt="" />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><ScrollLink to="hero" smooth={true} offset={0} duration={500}>Home</ScrollLink></li>
                <li><ScrollLink to="program" smooth={true} offset={-260} duration={500}>Program</ScrollLink></li>
                <li><ScrollLink to="about" smooth={true} offset={-150} duration={500}>About us</ScrollLink></li>
                <li><ScrollLink to="campus" smooth={true} offset={-260} duration={500}>Campus</ScrollLink></li>
                <li><ScrollLink to="testmonials" smooth={true} offset={-260} duration={500}>Testimonials</ScrollLink></li>
                <li><ScrollLink to="contact" smooth={true} offset={0} duration={-260} className='btn'>Contact us</ScrollLink></li>
            </ul>

            <img src={menu_icon} alt="" className='menu-icon'
                onClick={toggleMenu}
            />

        </nav>
    )
}

export default Navbar
