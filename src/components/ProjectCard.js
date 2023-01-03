import { Col } from "react-bootstrap";
import github from '../assets/images/github.png';
import webpage from '../assets/images/webpage.png';

export const ProjectCard = ({ title, description, githubUrl, appUrl, imageUrl }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imageUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div className="icons">
                        <div className="web-icon">
                            <a href={appUrl} target="_blank"><img src={webpage} alt="" /></a>
                        </div>
                        <div className="git-icon">
                            <a href={githubUrl} target="_blank"><img src={github} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
} 