import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from 'react-on-screen';
import colorSharp2 from '../assets/images/temp_colorsharp2.png';
import project_img from '../assets/images/temp_projectimg1.png';
import youbelong from '../assets/images/project1.png';
import marylane from '../assets/images/project2.png';
import spotify from '../assets/images/project3.png';
import recipes from '../assets/images/project4.png';
import battleship from '../assets/images/project5.png';

export const Projects = () => {

    const projects = [
        {
            title: "YouBelong Snap Mini",
            description: "",
            imageUrl: youbelong,
            appUrl: "https://www.youtube.com/watch?v=xCRQtvLTHfc",
            githubUrl: "https://github.com/rainawan/FosterYouth",
        },
        {
            title: "Mary Lane Cafe",
            description: "",
            imageUrl: marylane,
            appUrl: "https://rainawan.github.io/marylanecafe/index.html",
            githubUrl: "https://github.com/rainawan/marylanecafe",
        },
        {
            title: "Spotify Webpage", 
            description: "",
            imageUrl: spotify,
            appUrl: "https://snap-engineering-academy-2022.github.io/classwebsite/rainawan/",
            githubUrl: "https://github.com/Snap-Engineering-Academy-2022/classwebsite/tree/main/rainawan",
        },
        {
            title: "Recipes API", 
            description: "",
            imageUrl: recipes,
            appUrl: "",
            githubUrl: "https://github.com/rainawan/RecipesAPI",
        },
        {
            title: "SFML Games", 
            description: "",
            imageUrl: battleship,
            appUrl: "",
            githubUrl: "https://github.com/rainawan/SFML_Portfolio",
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