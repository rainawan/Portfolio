import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
// import { Tooltip } from 'react-tooltip'
import { Tooltip as ReactTooltip } from 'react-tooltip'
// import Tooltip from "react-bootstrap/Tooltip";
// import ReactTooltip from "react-tooltip";
// import {TooltipProvider as ReactTooltip} from "react-tooltip";
import ReactDOMServer from 'react-dom/server';

import python from '../assets/images/python.png';
import cplusplus from '../assets/images/cplusplus.png';
import javascript from '../assets/images/javascript.png';
import react from '../assets/images/react.webp';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import github from '../assets/images/github.png';

const Experience = () => {
    
    const skills = [
        {
            name: "Python",
            img: python,
        },
        {
            name: "C++",
            img: cplusplus,
        },
        {
            name: "JavaScript",
            img: javascript,
        },
        {
            name: "React",
            img: react,
        },
        {
            name: "HTML",
            img: html,
        },
        {
            name: "CSS",
            img: css,
        },
        {
            name: "GitHub",
            img: github,
        },
    ]
    const experiences = [
        {
            year: "2022",
            works: [
                {
                    name: "Snap Engineering Academy Scholar",
                    desc: 'desc',
                    company: 'Snap Inc.',
                },
                {
                    name: "Secretary",
                    desc: 'desc',
                    company: 'Society of Women Engineers',
                },
            ]
        },
        {
            year: "2021",
            works: [
                {
                    name: "Front Office Manager",
                    desc: 'desc',
                    company: 'Treelane Realty',
                }
            ]
        },
    ]


    return (
        <section className="experience" id="experience">
            <h2 className="head-text">Skills and Experiences</h2>
            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills.map((skill) => (
                        <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-item"
                        key={skill.name}
                        >
                        <div
                            className="app__flex"
                            style={{ backgroundColor: skill.bgColor }}
                        >
                            <img src={skill.img} alt="Image" />
                        </div>
                        <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <div className="app__skills-exp">
                {experiences.map((experience) => (
                    <motion.div
                    className="app__skills-exp-item"
                    key={experience.year}
                    >
                    <div className="app__skills-exp-year">
                        <p className="bold-text">{experience.year}</p>
                    </div>
                    <motion.div className="app__skills-exp-works">
                        {experience.works.map((work) => (
                        <>
                            <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-exp-work"
                            data-tip
                            data-for={work.name}
                            key={work.name}
                            >
                            <h4 className="bold-text">{work.name}</h4>
                            <p className="p-text">{work.company}</p>
                            </motion.div>

                            <ReactTooltip
                            id={work.name}
                            effect="solid"
                            arrowColor="#fff"
                            className="skills-tooltip"
                            >
                            {work.desc}
                            </ReactTooltip>


                        </>
                        ))}
                    </motion.div>
                    </motion.div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default Experience