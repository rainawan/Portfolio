import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";


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
                    desc: 'Built a functional React Native prototype that allows youth in the foster care system to share their stories. Pitched this Snap Mini to 200+ Snap community partners and executives.',
                    company: 'Snap Inc.',
                },
                {
                    name: "Secretary",
                    desc: 'Shared internship and scholarship opportunities to 300+ members, bridging the gender gap in STEM and advocating to have women more equally represented in the field of technology.',
                    company: 'Society of Women Engineers',
                },
            ]
        },
        {
            year: "2021",
            works: [
                {
                    name: "Front Office Manager",
                    desc: 'Maintained quality control for a realty office with over 200 agents and 300 clients. Oversaw daily business operations of 4 commercial entities.',
                    company: 'Treelane Realty',
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
                                    <p className="p-text">{work.company}</p>
                                </div>
                                </motion.div>
                                
                                <ReactTooltip
                                    anchorId={work.name}
                                    className="skills-tooltip"
                                    place="bottom"
                                    variant="info"
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