import { Col } from "react-bootstrap";
import github from '../assets/images/github.png';

export const ProjectCard = ({ title, description, imageUrl }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imageUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div className="git-icon">
                        <a href="https://www.google.com/"><img src={github} alt="" /></a>
                    </div>
                </div>
            </div>
        </Col>
    )
} 