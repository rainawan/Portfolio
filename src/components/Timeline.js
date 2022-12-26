// import timeline_elements from './TimelineElements';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as SchoolIcon } from '../assets/images/school.svg';
import { ReactComponent as WorkIcon } from '../assets/images/school.svg';

export const Timeline = () => {
   
    const timeline_elements = [
        {
            id: 1,
            title: "Computer Science at PCC",
            location: "Pasadena, CA",
            description: 
                "studeied in adjfak, graduated, courses taken:",
            date: "August 2021 - May 2023",
            icon: "school",
        },
    ]

    let workIconStyles = {background: "#06D6A0"};
    let schoolIconStyles = {background: "#F9C74F"};

    return (
        <section className="timeline" id="timeline">
            <div>
                <h1 className="title">TIMELINE</h1>
                <VerticalTimeline>        
                    {
                        timeline_elements.map((element) => {
                            let isWorkIcon = element.icon === "work";
                            let showButton =
                                element.buttonText !== undefined &&
                                element.buttonText !== null &&
                                element.buttonText !== "";
                            return (
                                <VerticalTimelineElement
                                    key={element.key}
                                    date={element.date}
                                    dateClassName="date"
                                    iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                                    icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                                >
                                <h3 className="vertical-timeline-element-title">
                                    {element.title}
                                </h3>
                                <h5 className="vertical-timeline-element-subtitle">
                                    {element.location}
                                </h5>
                                <p id="description">{element.description}</p>
                                {showButton && (
                                    <a
                                    className={`button ${
                                        isWorkIcon ? "workButton" : "schoolButton"
                                    }`}
                                    href="/"
                                    >
                                    {element.buttonText}
                                    </a>
                                )}
                                </VerticalTimelineElement>
                            );
                        })
                    }

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </section>
    );
}