import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter from '../assets/images/temp_meter.svg';
import color_sharp from '../assets/images/colorsharp.jpg';


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx">
                            <h2>SKILLS</h2>
                            <p>words words words skills skills<br></br>more words yay yay</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter} alt="Image" />
                                    <h5>python</h5>
                                </div>
                                <div className="item">
                                    <img src={meter} alt="Image" />
                                    <h5>object oriented</h5>
                                </div>
                                <div className="item">
                                    <img src={meter} alt="Image" />
                                    <h5>react</h5>
                                </div>
                                <div className="item">
                                    <img src={meter} alt="Image" />
                                    <h5>c++</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={color_sharp} alt="Image"/>
        </section>
      ) 
}