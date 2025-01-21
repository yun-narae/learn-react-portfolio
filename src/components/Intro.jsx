import React from "react";
import about from "../assets/img/aboutme.jpg";
import { introText } from "../constants"

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro__inner">
                <h1 className="intro__title">{introText.title}<br/><span>scroll down ⬇️</span></h1>
                
                <div className="intro__text">
                    <div className="text">
                        {introText.desc.map((text, key) => (
                            <div key={key}>{text}</div>
                        ))}
                    </div>
                    <div className="img">
                        <img src={about} alt="어바웃" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;