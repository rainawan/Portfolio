import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/images/logo.png';
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';
import { AiOutlineHome } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { GrProjects } from 'react-icons/gr';


export const NavBar = () => {

    const [activeNav, setActiveNav] = useState('#');
    const [scrolled, setScrolled] = useState(false);


    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll("nav .container ul li");
    window.onscroll = () => {
        var current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            // eslint-disable-next-line no-restricted-globals
            if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id'); }
        });

        navLi.forEach((li) => {
            li.classList.remove('active');
            if (li.href.includes(current)) {
                li.classList.add('active');
                }
        });
    };


    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <nav>
            <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><AiOutlineHome/></a>
            <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
            <a href="#projects" onClick={()=>setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><GrProjects/></a>

        </nav>
    )
}