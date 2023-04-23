import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";


import python from '../assets/images/python.png';
import cplusplus from '../assets/images/cpp.png';
import javascript from '../assets/images/javascript.png';
import react from '../assets/images/react.webp';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import github from '../assets/images/git.png';
import node from '../assets/images/node.png';
import vscode from '../assets/images/vscode.png';
import firebase from '../assets/images/firebase.png';
import procreate from '../assets/images/procreate.png';
import sfml from '../assets/images/sfml.png';

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
            name: "HTML",
            img: html,
        },
        {
            name: "CSS",
            img: css,
        },
        {
            name: "React.js",
            img: react,
        },
        {
            name: "Node.js",
            img: node,
        },
        {
            name: "GitHub",
            img: github,
        },
        {
            name: "VSCode",
            img: vscode,
        },
        {
            name: "Firebase",
            img: firebase,
        },
        {
            name: "Procreate",
            img: procreate,
        },
        {
            name: "SFML",
            img: sfml,
        },
    ]
    const experiences = [
        {
            year: "2023",
            works: [
                {
                    name: "Uber Technologies Inc.",
                    desc: "Selected among 4% of candidates for the Uber Career Prep Program. Enhancing software engineering fundamentals through technical workshops, mock interviews, and mentorship from an Uber engineer.",
                    role: "Software Engineering Fellow"
                },
                {
                    name: "NASA",
                    desc: 'Developing skills in mission development and technical writing by working in a team of 10+ students to sustain human exploration in space.',
                    role: 'Lucy Space MCA Researcher',
                }
            ]
        },
        {
            year: "2022",
            works: [
                {
                    name: "Snap Inc.",
                    desc: 'Built a functional React Native prototype that allows youth in the foster care system to share their stories. Pitched this Snap Mini to 200+ Snap community partners and executives.',
                    role: 'Snap Engineering Scholar',
                },
                {
                    name: "Society of Women Engineers",
                    desc: 'Shared internship and scholarship opportunities to 300+ members, bridging the gender gap in STEM and advocating to have women more equally represented in the field of technology.',
                    role: 'Secretary',
                },
            ]
        },
        {
            year: "2021",
            works: [
                {
                    name: "Treelane Realty",
                    desc: 'Maintained quality control for a realty office with over 200 agents and 300 clients. Oversaw daily business operations of 4 commercial entities.',
                    role: 'Front Office Manager',
                }
            ]
        },
    ]


    return (
        <>
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
                        <motion.div className="app__skills-exp-works" >
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
                                <div className="work-desc" id={work.name}>
                                    <h4 className="bold-text">{work.name}</h4>
                                    <p className="company-text">{work.role}</p>
                                </div>
                                </motion.div>
                                
                                <ReactTooltip
                                    anchorId={work.name}
                                    className="skills-tooltip"
                                    // place="bottom"
                                    // variant="info"
                                    content={work.desc}
                                />
                            </>
                            ))}
                        </motion.div>
                        </motion.div>
                    ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience