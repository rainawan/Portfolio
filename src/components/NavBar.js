import { useState, useEffect } from "react";
import { AiOutlineHome } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BsUiChecksGrid } from 'react-icons/bs';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';

export const NavBar = () => {

    const [activeNav, setActiveNav] = useState('#');
    // const [scrolled, setScrolled] = useState(false);


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


    // useEffect(() => {
    //     const onScroll = () => {
    //         if (window.scrollY > 50) {
    //             setScrolled(true);
    //         } else {
    //             setScrolled(false);
    //         }
    //     }
    //     window.addEventListener("scroll", onScroll);
        
    //     return () => window.removeEventListener("scroll", onScroll);
    // }, [])

    return (
        <nav>
            <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><AiOutlineHome/></a>
            <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
            <a href="#projects" onClick={()=>setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><BsUiChecksGrid/></a>
            {/* <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><IoChatbubbleEllipsesOutline/></a> */}
        </nav>
    )
}