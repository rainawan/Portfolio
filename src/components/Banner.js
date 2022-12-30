import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/images/me.png";
import HALO from "vanta/dist/vanta.halo.min"
import * as THREE from "three"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Engineer", "Stack Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 10);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) };
    }, [text])

    useEffect(() => {
        const threeScript = document.createElement("script");
        threeScript.setAttribute("id", "threeScript");
        threeScript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js");
        document.getElementsByTagName("head")[0].appendChild(threeScript);
        return () => {
            if(threeScript) {
                threeScript.remove();
            }
        }
    }, []);

    // const [ vantaEffect, setVantaEffect ] = useState(0)
    // const vantaRef = useRef(null)
    // useEffect(() => {
    //     if(!vantaEffect) {
    //         setVantaEffect (
    //             HALO({
    //                 el: vantaRef.current,
    //                 THREE
    //             })
    //         )
    //     }
    //     return() => {
    //         if(vantaEffect) vantaEffect.destroy()
    //     }
    // }, [vantaEffect])

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
                        {/* <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}></ArrowRightCircle></button> */}
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <img src={headerImg}alt="Header Image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}