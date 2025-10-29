// Skill.jsx
import React from "react";
import { Interview, resumeData } from "../constants";
import SvgIcon from "./SvgIcon/SvgIcon";

const Skill = () => {
    // **텍스트**를 <strong>으로 변환하는 함수
    const parseDescription = (text) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                const content = part.slice(2, -2);
                return <strong key={index}>{content}</strong>;
            }
            // 줄바꿈 처리
            return part.split('\n').map((line, i, arr) => (
                <React.Fragment key={`${index}-${i}`}>
                    {line}
                    {i < arr.length - 1 && <br />}
                </React.Fragment>
            ));
        });
    };

    return (
        <article id="skill" className="skill">
            <div className="skill__inner">
                <h2 className="skill__title">ABOUT ME</h2>

                <div className="skill__content">
                    {/* 이력 */}
                    <ul className="skill__desc">
                        {/* Career */}
                        <li className="skill__desc-item profile">
                            <h3>Career</h3>
                            <ul>
                                {resumeData.career.map((c, i) => (
                                <li key={`career-${i}`}>
                                    <div className="skill__meta">
                                    <p className="skill__date">{c.from} - {c.to}</p>
                                    <span className="skill__divider" aria-hidden="true" />
                                    <b>{c.company}</b>
                                    </div>
                                    <div className="skill__info">
                                    <span>{c.role}</span>
                                    {c.desc && <p>{c.desc}</p>}
                                    </div>
                                </li>
                                ))}
                            </ul>
                        </li>

                        {/* Education */}
                        <li className="skill__desc-item profile">
                            <h3>Education</h3>
                            <ul>
                                {resumeData.education.map((e, i) => (
                                <li key={`edu-${i}`}>
                                    <div className="skill__meta">
                                    <p className="skill__date">{e.from} ~ {e.to}</p>
                                    <span className="skill__divider" aria-hidden="true" />
                                    <b>{e.school}</b>
                                    </div>
                                    <div className="skill__info">
                                    <span>{e.course}</span>
                                    {e.desc && <p>{e.desc}</p>}
                                    </div>
                                </li>
                                ))}
                            </ul>
                        </li>
                    </ul>

                    {/* 소개 리스트 */}
                    <ul className="skill__desc">
                        <h3 className="skill__inner-title">Interview</h3>
                        {Interview.map((skill, key) => (
                            <li key={key} className="skill__desc-item">
                                <h3>
                                    <span>{key + 1}.</span>
                                    {skill.title}
                                </h3>
                                <p>{parseDescription(skill.desc)}</p>
                            </li>
                        ))}
                    </ul>

                    {/* 기술/툴 아이콘 */}
                    <div className="skill__tools">
                        <h3 className="skill__inner-title">Skill & Tools</h3>
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
        </article>
    );
};

export default Skill;
