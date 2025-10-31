// src/pages/Project.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { siteText } from "../constants";
import { preloadImages } from "../utils/imageOptimizer";

const Project = () => {
    const [filter, setFilter] = useState("ALL");

    const filteredSites =
        filter === "ALL" ? siteText : siteText.filter((s) => s.type === filter);

    // 이미지 preload
    useEffect(() => {
        const imageSrcs = siteText.map(site => site.img);
        preloadImages(imageSrcs);
    }, []);

    const renderCard = ({ img, imgName, keyword, type, title, code, view, figma, storybook, info, id }, idx) => {
        // 라우팅에 사용할 식별자: id가 있으면 id, 없으면 idx 사용
        const routeId = (id !== undefined && id !== null) ? String(id) : String(idx);

        return (
            <article id="project" className={`project__item s${idx + 1}`} key={id ?? `${title}-${idx}`}>
                {/* 전면 링크 (카드 전체 클릭 가능) */}
                <Link
                    to={`/projects/${routeId}`}
                    className="card-link"
                    aria-label={`프로젝트 상세: ${title}`}
                />

                <div className="project__item-head">
                    <span className="num">{idx + 1}.</span>
                    <p className="type">{type}</p>
                </div>

                <div className="img">
                    <img 
                        src={img} 
                        alt={imgName} 
                        loading="lazy"
                        decoding="async"
                    />
                </div>

                <h3 className="title">{title}</h3>
                
                <div className="keyword">
                    {keyword?.slice(0, 3).map((t, i) => (
                        <div key={`${title}-line-${i}`}>{t}</div>
                    ))}
                </div>


                <div className="btn">
                    {code && (
                        <a
                            href={code}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Code
                        </a>
                    )}
                    {view && (
                        <a
                            href={view}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            View
                        </a>
                    )}
                    {figma && (
                        <a
                            href={figma}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="btn--outline"
                        >
                            Figma
                        </a>
                    )}
                    {storybook && (
                        <a
                            href={storybook}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="btn--outline"
                        >
                            Storybook
                        </a>
                    )}
                </div>
            </article>
        );
    };

    return (
        <article id="project" className="project">
            <div className="project__inner">
                <header className="project__header">
                    <div className="project__title-wrap">
                        <h2 className="project__title">MY PROJECT</h2>

                        <div className="project__filter">
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

                <div className="project__grid">
                    {filteredSites.map((item, idx) => renderCard(item, idx))}
                </div>
            </div>
        </article>
    );
};

export default Project;

