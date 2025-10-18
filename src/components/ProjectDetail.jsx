// src/components/ProjectDetail.jsx
import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { siteText } from "../constants/index";
import { projectData } from "../constants/projectData";
import useImagePreview from "../hooks/useImagePreview";
import ImagePreviewModal from "./ImagePreviewModal/ImagePreviewModal";
import { scrollTo } from "../utils/smooth";
import useScrollToTop from "../hooks/useScrollToTop";
import SvgIcon from "./SvgIcon/SvgIcon";
import { preloadImages } from "../utils/imageOptimizer";

const ProjectDetail = () => {
    useScrollToTop(); // 라우팅/새로고침마다 맨 위로

    const { id } = useParams();
    const { previewUrl, openPreview, closePreview } = useImagePreview();

    // =========================
    // 🔹 projectData 로 프로젝트 찾기 (id 우선 → 숫자 index → 문자열 비교)
    // =========================
    const getProjectFromData = () => {
        if (!id) return null;

        // 1) key(id) 매칭
        if (projectData[id]) return projectData[id];

        // 2) 숫자 인덱스 폴백
        const keys = Object.keys(projectData);
        const idx = Number.isNaN(Number(id)) ? null : Number(id);
        if (idx !== null && idx >= 0 && idx < keys.length) return projectData[keys[idx]];

        // 3) 문자열 비교 (id/title)
        const hit = keys
            .map((k) => projectData[k])
            .find((p) => String(p.id) === String(id) || String(p.title) === String(id));
        return hit || null;
    };

    // 1) 프로젝트 찾기
    const proj = getProjectFromData();

    // 2) siteText 보조 데이터 먼저 잡기 (item을 먼저!)
    const idx = Number.isNaN(Number(id)) ? null : Number(id);
    let item = siteText.find((s) => String(s.id) === String(id));
    if (!item && idx !== null && idx >= 0 && idx < siteText.length) item = siteText[idx];

    // 3) 헤더/메타 등 파생값을 먼저 계산
    const headerTitle = proj?.title || item?.title || "-";
    const meta = proj?.meta || item?.meta || {};
    const view = item?.view;
    const code = item?.code;
    const imgName = item?.imgName || headerTitle;
    const imageSrc = item?.img || "/images/placeholder.jpg";
    const imageAlt = imgName || `${headerTitle} 미리보기`;

    // 4) 이제야 workScreens 계산 (위에서 선언된 값들만 사용!)
    const workScreens = (proj?.workScreen?.src || item?.detailImg || []).map((src, i) => ({
        src,
        alt:
            (proj?.workScreen?.alt || item?.detailImgAlt || [])[i] ||
            `${headerTitle} - ${imgName} ${i + 1}`,
    }));

    const NAVS = [
        { id: "introduction", label: "프로젝트 소개" },
        { id: "contribution", label: "작업 기여도" },
        { id: "features", label: "핵심 기능" },
        { id: "ts", label: "트러블 슈팅" },
        { id: "screens", label: "작업 화면" },
        { id: "retrospect", label: "회고록" },
    ];
  
    const sectionExists = {
        introduction:  !!proj?.introduction,
        contribution:  !!proj?.contribution && Array.isArray(proj.contribution) && proj.contribution.length > 0,
        features:      Array.isArray(proj?.features) && proj.features.length > 0,
        ts:            Array.isArray(proj?.troubleshooting) && proj.troubleshooting.length > 0,
        screens:       workScreens.length > 0,
        retrospect:    !!proj?.retrospect,
    };
  
    // 실제 표시할 navs
    const navs = NAVS.filter(n => sectionExists[n.id]);

    const HEADER_OFFSET = 80;
    const sectionRefs = useRef(navs.map(() => React.createRef()));
    const refFor = (id) => sectionRefs.current[navs.findIndex(n => n.id === id)];
    const [active, setActive] = useState(0);

    const clearHash = () => {
        const { pathname, search } = window.location;
        if (window.location.hash) {
            window.history.replaceState(null, "", `${pathname}${search}`);
        }
    };

    useEffect(() => {
        setActive(0);
        clearHash();
    }, []);

    // 이미지 preload
    useEffect(() => {
        const imageSrcs = [];
        
        // 메인 썸네일 이미지
        if (imageSrc) {
            imageSrcs.push(imageSrc);
        }
        
        // 작업 화면 이미지들
        if (workScreens.length > 0) {
            workScreens.forEach(screen => {
                if (screen.src) {
                    imageSrcs.push(screen.src);
                }
            });
        }
        
        if (imageSrcs.length > 0) {
            preloadImages(imageSrcs);
        }
    }, [imageSrc, workScreens]);

    useEffect(() => {
        const targets = sectionRefs.current.map((r) => r.current).filter(Boolean);
        if (!targets.length) return;

        const io = new IntersectionObserver(
            (entries) => {
                if (window.scrollY < 10) {
                    setActive(0);
                    return;
                }
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const i = targets.indexOf(entry.target);
                        if (i > -1) setActive(i);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "-40% 0px -55% 0px" }
        );

        targets.forEach((t) => io.observe(t));
        return () => io.disconnect();
    }, []);

    // projectData 에도, siteText 보조에도 없으면 404 처리
    if (!proj && !item) {
        return (
            <section id="projectDetail" className="project__wapper">
                <div className="project__inner">
                    <header className="project__header">
                        <div className="project__text">
                            <h2 className="project__title">프로젝트를 찾을 수 없습니다.</h2>
                            <p className="project__subdesc">잘못된 주소이거나 삭제된 항목일 수 있습니다.</p>
                            <div className="project__buttons">
                                <Link to="/" className="btn btn--outline" aria-label="목록으로">
                                    목록으로
                                </Link>
                            </div>
                        </div>
                    </header>
                </div>
            </section>
        );
    }

    return (
        <>
            <article id="projectDetail" className="project__wapper">
                <div className="project__inner">
                    <Link to="/" className="project__inner-back" aria-label="목록으로">
                        <SvgIcon name="arrow-left" />
                    </Link>

                    <div className="project__header">
                        <div className="project__header-inner">
                            <h2 className="project__title">{headerTitle}</h2>

                            <div className="project__about" aria-label="프로젝트 개요">
                                <div className="project__about-row period">
                                    <b>개발 기간</b>
                                    <p>{meta?.period || "-"}</p>
                                </div>
                                <div className="project__about-row stack">
                                    <b>개발 환경</b>
                                    <p>
                                        {Array.isArray(meta?.stack) ? meta.stack.join(" · ") : meta?.stack || "-"}
                                    </p>
                                </div>
                                <div className="project__about-row role">
                                    <b>주요 역할</b>
                                    <p>{meta?.role || "-"}</p>
                                </div>
                                {meta?.contribution && (
                                    <div className="project__about-row contribution">
                                        <b>기여도</b>
                                        <p>{meta.contribution}</p>
                                    </div>
                                )}
                            </div>

                            <div className="project__buttons" role="group" aria-label="프로젝트 바로가기">
                                {view && (
                                    <a
                                        className="btn btn--outline"
                                        href={view}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="프로젝트 보기 새 탭에서 열림"
                                    >
                                        view
                                    </a>
                                )}
                                {code && (
                                    <a
                                        className="btn btn--outline"
                                        href={code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="코드 보기 새 탭에서 열림"
                                    >
                                        code
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="project__thumbnail">
                            <img 
                                src={imageSrc} 
                                alt={imageAlt} 
                                loading="eager"
                                decoding="async"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    </div>

                    <div className="project__item">
                        <div className="project__contents">
                            {/* 사이드 네비게이션 */}
                            <ul className="project__aside" role="tablist" aria-label="프로젝트 섹션 이동">
                                {navs.map((nav, i) => (
                                    <li key={nav.id} className={`project__aside-title ${active === i ? "active" : ""}`} role="tab" aria-selected={active === i}>
                                    <a
                                        href={`#${nav.id}`}
                                        className="project__aside-link"
                                        onClick={(e) => {
                                        e.preventDefault();
                                        const el = refFor(nav.id)?.current;
                                        if (el) {
                                            scrollTo(el, { offset: -HEADER_OFFSET, duration: 1.2 });
                                            setActive(i);
                                        }
                                        }}
                                    >
                                        {nav.label}
                                    </a>
                                    </li>
                                ))}
                            </ul>

                            {/* 본문 섹션들 */}
                            <article className="project__article">
                                {/* 🔹 소개: projectData.introduction */}
                                {proj?.introduction && (
                                    <section
                                        id="introduction"
                                        ref={refFor("introduction")}
                                        className="project__article-section"
                                    >
                                        <h3 className="project__article-section-title">프로젝트 소개</h3>
                                        <ul className="project__article-section-inner introduction" aria-label="프로젝트 소개">
                                            <li className="section__card intro">
                                                <h4>"{meta?.oneLine || "-"}"</h4>
                                                {(proj.introduction.description || []).map((p, i) => (
                                                    <p key={`intro-${i}`}>{p}</p>
                                                ))}
                                            </li>
                                        </ul>
                                    </section>
                                )}

                                {/* {🔹 팀프로젝트에만 해당되는 작업 기여도} */}
                                {proj?.contribution && (
                                    <section
                                        id="contribution"
                                        ref={refFor("contribution")}
                                        className="project__article-section contribution"
                                    >
                                        <h3 className="project__article-section-title">
                                            작업 기여도
                                            <span className="my-badge">I did it</span>
                                        </h3>
                                        <ul className="project__article-section-inner" aria-label="핵심 기능">
                                        {proj.contribution.map((t, i) => (
                                            <li className="section__card" key={`cb-${i}`}>
                                                <h4>{t.title}</h4>

                                                {Array.isArray(t.desc)
                                                ? t.desc.map((line, j) => <p key={`cb-${i}-${j}`}>{line}</p>)
                                                : <p>{t.desc}</p>}
                                            </li>
                                        ))}
                                        </ul>
                                    </section>
                                )}

                                {/* 🔹 핵심 기능: projectData.features */}
                                {Array.isArray(proj?.features) && proj.features.length > 0 && (
                                    <section
                                        id="features"
                                        ref={refFor("features")}
                                        className="project__article-section"
                                    >
                                        <h3 className="project__article-section-title">핵심 기능</h3>
                                        <ul className="project__article-section-inner" aria-label="핵심 기능">
                                            {proj.features.map((f, i) => (
                                                <li className="section__card" key={`feature-${i}`}>
                                                    <h4>{f.title}</h4>
                                                    {(f.desc || []).map((p, j) => (
                                                        <p key={`feature-${i}-${j}`}>{p}</p>
                                                    ))}
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                )}

                                {/* 🔹 트러블 슈팅: projectData.troubleshooting */}
                                {Array.isArray(proj?.troubleshooting) && proj.troubleshooting.length > 0 && (
                                    <section 
                                        id="ts" 
                                        ref={refFor("ts")} 
                                        className="project__article-section"
                                    >
                                        <h3 className="project__article-section-title">트러블 슈팅</h3>
                                        <ul className="project__article-section-inner" aria-label="트러블 슈팅">
                                            {proj.troubleshooting.map((t, i) => (
                                                <li className="section__card" key={`ts-${i}`}>
                                                    <h4>{t.title}</h4>
                                                    <span className="card_inner">
                                                        <b>원인</b>
                                                        <p>{t.cause}</p>
                                                    </span>
                                                    <span className="card_inner">
                                                        <b>해결 과정</b>
                                                        <p>{t.solution}</p>
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                )}

                                {/* 🔹 작업 화면: projectData.screens?.images || (siteText 보조) */}
                                {workScreens.length > 0 && (
                                    <section
                                        id="screens"
                                        ref={refFor("screens")}
                                        className="project__article-section project__view"
                                    >
                                        <h3 className="project__article-section-title">작업 화면</h3>
                                        <ul className="project__article-section-inner" aria-label="작업 화면">
                                            {workScreens.map((img, idx) => (
                                                <li onClick={() => openPreview(img.src)} className="project__image" key={`detail-${idx}`}>
                                                    <p className="project__image-name">{img.alt}</p>
                                                    <img
                                                        src={img.src}
                                                        alt={img.alt + "-작업화면"}
                                                        loading="lazy"
                                                        decoding="async"
                                                        role="button"
                                                        tabIndex={0}
                                                        aria-haspopup="dialog"
                                                        onKeyDown={(e) => {
                                                            if (e.key === "Enter" || e.key === " ") openPreview(img.src);
                                                        }}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                )}

                                {/* 🔹 회고록: projectData.retrospect */}
                                {proj?.retrospect && (
                                    <section
                                        id="retrospect"
                                        ref={refFor("retrospect")}
                                        className="project__article-section"
                                    >
                                        <h3 className="project__article-section-title">회고록</h3>
                                        <ul className="project__article-section-inner retrospect" aria-label="회고록">
                                            <li className="section__card">
                                                {proj.retrospect.quote && <h4>{proj.retrospect.quote}</h4>}
                                                {/* <span className="card_inner"> */}
                                                    {(proj.retrospect.body || []).map((p, i) => (
                                                        <p key={`retro-${i}`}>{p}</p>
                                                    ))}
                                                {/* </span> */}
                                            </li>
                                        </ul>
                                    </section>
                                )}
                            </article>
                        </div>
                    </div>
                </div>
            </article>

            {/* 이미지 미리보기 모달 */}
            <ImagePreviewModal previewUrl={previewUrl} onClose={closePreview} />
        </>
    );
};

export default ProjectDetail;
