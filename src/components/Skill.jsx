// Skill.jsx
import React from "react";
import { skillText } from "../constants";
import SvgIcon from "./SvgIcon/SvgIcon";

const Skill = () => {
    return (
        <section id="skill" className="skill">
            <div className="skill__inner">
                <h2 className="skill__title">ABOUT ME</h2>

                <div className="skill__content">
                    {/* 소개 리스트 */}
                    <ul className="skill__desc">
                        {skillText.map((skill, key) => (
                            <li key={key} className="skill__desc-item">
                                <h3>
                                    <span>{key + 1}.</span>
                                    {skill.title}
                                </h3>
                                <p>{skill.desc}</p>
                            </li>
                        ))}
                    </ul>

                    {/* 기술/툴 아이콘 */}
                    <div className="skill__tools">
                        <h3>Skill & Tools</h3>
                        <div className="skill__tools-group">
                            <h4>FrontEnd</h4>
                            <ul className="skill__icons">
                                {["html", "css", "javascript", "react", "tailwind", "sass"].map((n) => (
                                    <li key={n} className="icon__cover">
                                    <SvgIcon name={n} className={`icon__svg ${n}`} />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="skill__tools-group">
                            <h4>Tools</h4>
                            <ul className="skill__icons">
                                {["github", "figma", "xd", "illustrator", "photoshop", "slack", "notion", "discord"].map((n) => (
                                <li key={n} className="icon__cover">
                                    <SvgIcon name={n} className={`icon__svg ${n}`} />
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;
