// src/pages/Site.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { siteText } from "../constants";

const Site = () => {
    const [filter, setFilter] = useState("ALL");

    const filteredSites =
        filter === "ALL" ? siteText : siteText.filter((s) => s.type === filter);

    const renderCard = ({ img, imgName, keyword, type, title, code, view, info, id }, idx) => {
        // 라우팅에 사용할 식별자: id가 있으면 id, 없으면 idx 사용
        const routeId = (id !== undefined && id !== null) ? String(id) : String(idx);

        return (
            <article className={`site__item s${idx + 1}`} key={id ?? `${title}-${idx}`}>
                {/* 전면 링크 (카드 전체 클릭 가능) */}
                <Link
                    to={`/projects/${routeId}`}
                    className="card-link"
                    aria-label={`프로젝트 상세: ${title}`}
                />

                <div className="site__item-head">
                    <span className="num">{idx + 1}.</span>
                    <p className="type">{type}</p>
                </div>

                <div className="img">
                    <img src={img} alt={imgName} />
                </div>

                <h3 className="title">{title}</h3>
                
                <div className="keyword">
                    {keyword?.slice(0, 3).map((t, i) => (
                        <div key={`${title}-line-${i}`}>{t}</div>
                    ))}
                </div>


                <div className="btn">
                    <a
                        href={code}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Code
                    </a>
                    <a
                        href={view}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                    >
                        View
                    </a>
                </div>
            </article>
        );
    };

    return (
        <section id="project" className="site">
            <div className="site__inner">
                <header className="site__header">
                    <div className="site__title-wrap">
                        <h2 className="site__title">MY PROJECT</h2>

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

                <div className="site__grid">
                    {filteredSites.map((item, idx) => renderCard(item, idx))}
                </div>
            </div>
        </section>
    );
};

export default Site;
