import React, { useState } from "react";
import { siteText } from "../constants";

const Site = () => {
    const [filter, setFilter] = useState("ALL");

    const filteredSites =
        filter === "ALL" ? siteText : siteText.filter((s) => s.type === filter);

    const renderCard = ({ text, type, title, code, view, info, id }, idx) => (
        <article className={`site__item s${idx + 1}`} key={id ?? `${title}-${idx}`}>
            <div className="info-inner">
                <span className="num">{idx + 1}.</span>
                <p className="type">{type}</p>
            </div>

            <div className="text">
                {text?.slice(0, 3).map((t, i) => (
                    <div key={`${title}-line-${i}`}>{t}</div>
                ))}
            </div>

            <h3 className="title">{title}</h3>

            <div className="btn">
                <a href={code} target="_blank" rel="noopener noreferrer">Code</a>
                <a href={view} target="_blank" rel="noopener noreferrer">View</a>
            </div>

            {/* <div className="info">
                <span>{info?.[0]}</span>
            </div> */}
        </article>
    );

    return (
        <section id="site" className="site">
            <div className="site__inner">
                <header className="site__header">
                    <div className="site__title-wrap">
                        <h2 className="site__title">
                            SITE CODING
                        </h2>

                        <div className="site__filter">
                            {["ALL", "PERSONAL", "TEAM"].map((cat) => (
                                <button
                                    key={`cat-${cat}`}
                                    className={filter === cat ? "active" : ""}
                                    onClick={() => setFilter(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </header>

                {/* ✅ 스와이퍼 대신 그리드 리스트 */}
                <div className="site__grid">
                    {filteredSites.map((item, idx) => renderCard(item, idx))}
                </div>
            </div>
        </section>
    );
};

export default Site;
