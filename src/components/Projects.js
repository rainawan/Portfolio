import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/images/temp_colorsharp2.png';
import project_img from '../assets/images/temp_projectimg1.png';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "YouBelong Snap Mini",
            description: "snap mini prototype",
            imageUrl: project_img,
            appUrl: "https://www.netflix.com/browse",
            githubUrl: "https://www.google.com/",
        },
        {
            title: "Mary Lane Cafe",
            description: "multipage responsive website",
            imageUrl: project_img,
        },
        {
            title: "SFML Games", 
            description: "c++ object oriented games",
            imageUrl: project_img,
        },
        {
            title: "SFML Games", 
            description: "c++ object oriented games",
            imageUrl: project_img,
        }
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                            <h2>Projects</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                    <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                        projects.map((project, index) => {
                                            return (
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                        }
                                    </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            {/* <img clssName="background-image-right" src={colorSharp2}></img> */}
        </section>
    )
}