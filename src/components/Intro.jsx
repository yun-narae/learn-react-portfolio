import React from "react";
import about from "../assets/img/aboutme.jpg";
import { introText } from "../constants"
import SvgIcon from './SvgIcon/SvgIcon';

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro__inner">
                <h1 className="sr-only">
                    윤나래 프론트엔드 포트폴리오
                </h1>

                <div className="intro__text">
                    <h2 className="intro__text-title">
                        {introText.title}
                    </h2>
                    <div className="intro__text-frame">
                        <div className="intro__text-desc">
                            {introText.desc.map((text, key) => (
                                <b key={key}>{text}</b>
                            ))}
                        </div>
                        <p className="intro__text-text">{introText.text}</p>
                    </div>
                    <div className="img">
                        <img src={about} alt="윤나래 프로필" />
                    </div>
                </div>
                <span className="update">update.2025.10</span>
                <span
                    role="button"
                    tabIndex={0}
                    className="scroll-down animate-bounce"
                    aria-label="스킬 섹션으로 이동"
                    onClick={(e) => {
                        e.preventDefault();
                        const target = '#skill';
                        if (window.lenis?.scrollTo) {
                        window.lenis.scrollTo(target);
                        } else {
                        document.querySelector(target)?.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                        });
                        }
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') e.currentTarget.click();
                    }}
                    >
                        <SvgIcon name="arrow-down" className="arrow-down" />
                        <SvgIcon name="arrow-down" className="arrow-down" />
                </span>
            </div>
        </section>
    );
};

export default Intro;