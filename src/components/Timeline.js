import timeline_elements from './TimelineElements';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as SchoolIcon } from '../assets/images/school.svg';

export const Timeline = () => {
    let workIconStyles = {background: "#06D6A0"};
    let schoolIconStyles = {background: "#F9C74F"};

    return (
        <div>
            <h1>TIMELINE</h1>
            <VerticalTimeline>
                {/* {
                    timeline_elements.map(element => {
                        let isWorkIcon = element.icon === "work"
                        return (
                            <VerticalTimelineElement
                                key={element.key}
                                data={element.date}
                                dateClassName="date"
                                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                            >

                            </VerticalTimelineElement>
                        );
                    })
                } */}
                
                {/* <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement> */}
            </VerticalTimeline>
        </div>
    )
}