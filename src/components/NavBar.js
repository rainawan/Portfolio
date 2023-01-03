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
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

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

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
//className={activeNav === '#' ? 'active' : ''}
    return (
        <nav>
            <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><AiOutlineHome/></a>
            <a href="#experience" onClick={()=>setActiveNav('#about')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
            <a href="#project"><GrProjects/></a>

        </nav>
        // <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        //     <h3><AiFillHome/></h3>
        //     <Container>
        //         <Navbar.Brand href="#home">
        //             <img src={logo} alt="Logo"/>
        //         </Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav">
        //             <span className="navbar-toggler-icon"></span>
        //         </Navbar.Toggle>
        //         <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="me-auto">
        //             <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}><AiFillHome/></Nav.Link>
        //             <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
        //             <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
        //         </Nav>
        //         <span className="navbar-text">
        //             <div className="social-icon">
        //                 <a href="#"><img src={navIcon1} alt="" /></a>
        //                 <a href="#"><img src={navIcon2} alt="" /></a>
        //                 <a href="#"><img src={navIcon3} alt="" /></a>
        //             </div>
        //             <button className="vvd" onClick={() => console.log('connect')}>
        //                 <span>Let's Connect</span>
        //             </button>
        //         </span>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    )
}