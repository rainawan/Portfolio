import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/images/me.png";
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';
import {TfiLinkedin} from 'react-icons/tfi'
import { BsGithub } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Engineer", "Full-Stack Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 10);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 3)
        }
        if (!isDeleting && updatedText === fullText) { 
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100);
        }
    }

    return (
        <section className = "banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>Hi! I'm Raina,<br></br><span className="wrap">a {text}</span></h1>
                        {/* <h1 className="cursor">_</h1> */}
                        <p>I am a second-year Computer Science student at Pasadena City College, pursuing a career in software engineering.</p>
                        
                    <div className="social-icon">   
                        <a href="#"><div className="icon"><MdEmail/></div></a>
                        <a href="#"><div className="icon"><TfiLinkedin /></div></a>
                        <a href="#"><div className="icon"><BsGithub /></div></a>
                    </div>
                
                    </Col>
                </Row>
            </Container>
            {/* <span className="navbar-text">
                <button className="vvd" onClick={() => console.log('connect')}>
                    <span>Let's Connect</span>
                </button>
            </span> */}
        </section>
    )
}