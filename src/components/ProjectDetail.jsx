// src/components/ProjectDetail.jsx
import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { siteText } from "../constants";
import useImagePreview from "../hooks/useImagePreview";
import ImagePreviewModal from "./ImagePreviewModal/ImagePreviewModal";
import { scrollTo } from "../utils/smooth";
import useScrollToTop from "../hooks/useScrollToTop";

const ProjectDetail = () => {
    useScrollToTop(); // 라우팅/새로고침마다 맨 위로

    const { id } = useParams();
    const { previewUrl, openPreview, closePreview } = useImagePreview();

    // 데이터 찾기: id 매칭 우선, 실패 시 숫자 인덱스 폴백
    const idx = Number.isNaN(Number(id)) ? null : Number(id);
    let item = siteText.find((s) => String(s.id) === String(id));
    if (!item && idx !== null && idx >= 0 && idx < siteText.length) {
        item = siteText[idx];
    }

    const NAVS = [
        { id: "introduction", label: "프로젝트 소개" },
        { id: "features", label: "핵심 기능" },
        { id: "ts", label: "트러블 슈팅" },
        { id: "retrospect", label: "회고록" },
        { id: "screens", label: "작업 화면" },
    ];

    const HEADER_OFFSET = 80;
    const sectionRefs = useRef(NAVS.map(() => React.createRef()));
    const [active, setActive] = useState(0);

    // 해시 제거 helper (히스토리 추가 없이 주소만 정리)
    const clearHash = () => {
        const { pathname, search } = window.location;
        if (window.location.hash) {
            window.history.replaceState(null, "", `${pathname}${search}`);
        }
    };

    // 주소의 해시를 히스토리에 남기지 않고 교체
    const replaceHash = (hashId) => {
        const { pathname, search } = window.location;
        window.history.replaceState(null, "", `${pathname}${search}#${hashId}`);
    };

    // ⬇️ 페이지 진입 시 항상 초기화: 해시 제거 + active=0 + 최상단
    useEffect(() => {
        setActive(0);
        clearHash();
    }, []);

    // 스크롤 진행에 따라 현재 섹션 active 동기화 (맨 위 가드 포함)
    useEffect(() => {
        const targets = sectionRefs.current.map((r) => r.current).filter(Boolean);
        if (!targets.length) return;

        const io = new IntersectionObserver(
            (entries) => {
                // 맨 위면 항상 첫 섹션 활성화 유지
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

    if (!item) {
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

    const {
        img,
        imgName,
        title,
        code,
        view,
        meta = {},
        detailImg = [],
        detailImgAlt = [],
    } = item;

    const imageSrc = img || "/images/placeholder.jpg";
    const imageAlt = imgName || `${title} 미리보기`;

    return (
        <>
            <article id="projectDetail" className="project__wapper project__wapper-yorizori">
                <div className="project__inner">
                    <div className="project__header">
                        <div className="project__header-inner">
                            <h2 className="project__title">{title}</h2>

                            <div className="project__about" aria-label="프로젝트 개요">
                                <div className="project__about-row period">
                                    <b>개발 기간</b>
                                    <p>{meta.period || "-"}</p>
                                </div>
                                <div className="project__about-row role">
                                    <b>주요 역할</b>
                                    <p>{meta.role || "-"}</p>
                                </div>
                                <div className="project__about-row contribution">
                                    <b>기여도</b>
                                    <p>{meta.contribution || "-"}</p>
                                </div>
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
                            <img src={imageSrc} alt={imageAlt} loading="eager" />
                        </div>
                    </div>

                    <div className="project__item">
                        <div className="project__contents">
                            {/* 사이드 네비게이션 */}
                            <ul className="project__aside" role="tablist" aria-label="프로젝트 섹션 이동">
                                {NAVS.map((nav, i) => (
                                    <li
                                        key={nav.id}
                                        className={`project__aside-title ${active === i ? "active" : ""}`}
                                        role="tab"
                                        aria-selected={active === i}
                                        aria-current={active === i ? "true" : undefined}
                                    >
                                        <a
                                            href={`#${nav.id}`}
                                            className="project__aside-link"
                                            onClick={(e) => {
                                                e.preventDefault(); // 해시로 인한 히스토리 추가 방지
                                                const el = sectionRefs.current[i]?.current;
                                                if (!el) return;
                                                scrollTo(el, { offset: -HEADER_OFFSET, duration: 1.2 });
                                                replaceHash(nav.id); // 주소줄만 교체(히스토리 X)
                                                setActive(i); // 즉시 active 반영
                                            }}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter" || e.key === " ") {
                                                    e.preventDefault();
                                                    const el = sectionRefs.current[i]?.current;
                                                    if (!el) return;
                                                    scrollTo(el, { offset: -HEADER_OFFSET, duration: 1.2 });
                                                    replaceHash(nav.id);
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
                            <div className="project__article">
                                <section
                                    id="introduction"
                                    ref={sectionRefs.current[0]}
                                    className="project__article-section"
                                >
                                    <h3 className="project__article-section-title">프로젝트 소개</h3>
                                    <ul className="project__article-section-inner" aria-label="프로젝트 소개">
                                        <li className="section__card intro">
                                            <h4>{meta.oneLine || "-"}</h4>
                                            <p>
                                                요리조리는 요리를 매개로 사람들을 연결하는 모임 기반 커뮤니티 플랫폼입니다.
                                                사용자는 다양한 요리 모임을 등록하거나 참여할 수 있고,
                                                서로의 레시피와 후기를 공유하면서 요리 경험을 나눌 수 있습니다.
                                            </p>
                                        </li>
                                    </ul>
                                </section>

                                <section
                                    id="features"
                                    ref={sectionRefs.current[1]}
                                    className="project__article-section"
                                >
                                    <h3 className="project__article-section-title">핵심 기능</h3>
                                    <ul className="project__article-section-inner" aria-label="핵심 기능">
                                        <li className="section__card">
                                            <h4>로그인 / 회원 관리</h4>
                                            <p>PocketBase의 Auth 기능을 활용해 이메일 기반 로그인과 로그아웃을 구현했습니다.</p>
                                            <p>
                                                회원 탈퇴 시에는 사용자가 작성한 게시글, 댓글, 찜, 참여 기록 등 모든 관련 데이터가
                                                자동으로 정리되도록 설계하여 데이터 정합성을 유지했습니다.
                                            </p>
                                        </li>
                                        <li className="section__card">
                                            <h4>모임 등록 / 수정 / 삭제</h4>
                                            <p>사용자는 요리 모임을 직접 등록하고 이미지를 함께 업로드 가능</p>
                                            <p>수정 및 삭제 시에는 UI와 DB가 동시에 반영되어 즉각적인 변화가 시각적으로 확인</p>
                                            <p>데이터 상태가 일관되도록 동기화</p>
                                        </li>
                                        <li className="section__card">
                                            <h4>관심 모임 저장</h4>
                                            <p>
                                                로컬스토리지 기반 스냅샷을 활용해 서버 요청 없이도 즉각적인 하트 토글 반응을 제공합니다.
                                            </p>
                                            <p>
                                                동시에 PocketBase의 `post_likes` 컬렉션과 연동하여 사용자의 찜 상태를 저장하고,
                                                클라이언트와 서버 간의 데이터 일관성을 유지했습니다.
                                            </p>
                                        </li>
                                        <li className="section__card">
                                            <h4>댓글 시스템</h4>
                                            <p>댓글은 작성 즉시 렌더링되어 실시간 반영</p>
                                            <p>삭제 시에는 해당 게시글의 댓글 수가 자동으로 감소</p>
                                            <p>비동기 처리 후 UI 업데이트까지 연결하여 자연스러운 인터랙션 흐름을 완성</p>
                                        </li>
                                        <li className="section__card">
                                            <h4>모임 예약 및 취소</h4>
                                            <p>
                                                사용자는 각 모임에 참여하거나 취소할 수 있으며,
                                                인원 제한에 도달하면 자동으로 모집 마감 상태로 전환
                                            </p>
                                            <p>
                                                여러 사용자가 동시에 클릭할 경우를 대비해 중복 요청 방지 로직을 추가해 데이터 불일치를 예방
                                            </p>
                                        </li>
                                        <li className="section__card">
                                            <h4>반응형 + 다크모드 + Skeleton</h4>
                                            <p>
                                                모바일, 태블릿, 데스크톱 해상도별로 레이아웃이 최적화되어 있으며 Tailwind 기반 다크모드를 제공
                                            </p>
                                            <p>
                                                또한 Skeleton 로딩 UI를 적용해 데이터 로딩 시에도 시각적 일관성을 유지하고,
                                                사용자 피드백 경험을 향상
                                            </p>
                                        </li>
                                        <li className="section__card">
                                            <h4>디자인 및 컴포넌트화 + Storybook</h4>
                                            <p>Figma로 전체 디자인 시스템을 직접 설계하고, 이를 토대로 UI 컴포넌트를 세분화</p>
                                            <p>모든 컴포넌트는 Storybook을 통해 문서화하여 재사용성과 유지보수성을 높임</p>
                                            <p>디자인과 개발 간의 연결을 강화</p>
                                        </li>
                                    </ul>
                                </section>

                                <section id="ts" ref={sectionRefs.current[2]} className="project__article-section">
                                    <h3 className="project__article-section-title">트러블 슈팅</h3>
                                    <ul className="project__article-section-inner" aria-label="트러블 슈팅">
                                        <li className="section__card">
                                            <h4>댓글 수 실시간 반영 안됨</h4>
                                            <span className="card_inner">
                                                <b>원인</b>
                                                <p>댓글 CRUD는 되었지만 post의 comments_count 필드 업데이트 누락</p>
                                            </span>
                                            <span className="card_inner">
                                                <b>해결 과정</b>
                                                <p>{`댓글 등록·삭제 시 pb.collection("post").update(id, { comments_count: … }) 로직 추가 후, setItems 동기화`}</p>
                                            </span>
                                        </li>
                                        <li className="section__card">
                                            <h4>배포 환경에서 게시글이 로드되지 않음</h4>
                                            <span className="card_inner">
                                                <b>원인</b>
                                                <p>PocketBase URL을 상대경로(/api)로 지정해 빌드 환경에서 CORS 발생</p>
                                            </span>
                                            <span className="card_inner">
                                                <b>해결 과정</b>
                                                <p>.env 파일에 VITE_PB_URL을 절대 경로(https://y-narae.pockethost.io)로 고정하여 해결</p>
                                            </span>
                                        </li>
                                        <li className="section__card">
                                            <h4>PostCard 클릭 시 Detail 페이지 이동 불가</h4>
                                            <span className="card_inner">
                                                <b>원인</b>
                                                <p>카드의 클릭 영역이 내부 버튼과 겹쳐 이벤트 버블링 차단됨</p>
                                            </span>
                                            <span className="card_inner">
                                                <b>해결 과정</b>
                                                <p>onClick 이벤트를 상위에서 처리하고 내부 버튼에는 stopPropagation() 적용으로 해결</p>
                                            </span>
                                        </li>
                                        <li className="section__card">
                                            <h4>Failed to load resource: net::ERR_HTTP2_PROTOCOL_ERROR</h4>
                                            <span className="card_inner">
                                                <b>원인</b>
                                                <p>카드의 클릭 영역이 내부 버튼과 겹쳐 이벤트 버블링 차단됨</p>
                                            </span>
                                            <span className="card_inner">
                                                <b>해결 과정</b>
                                                <p>onClick 이벤트를 상위에서 처리하고 내부 버튼에는 stopPropagation() 적용으로 해결</p>
                                            </span>
                                        </li>
                                    </ul>
                                </section>

                                <section
                                    id="retrospect"
                                    ref={sectionRefs.current[3]}
                                    className="project__article-section"
                                >
                                    <h3 className="project__article-section-title">회고록</h3>
                                    <ul className="project__article-section-inner" aria-label="회고록">
                                        <li className="section__card">
                                            <h4>“처음으로 완전한 CRUD + 사용자 흐름이 구현된 프로젝트였다.”</h4>
                                            <span className="card_inner">
                                                <p>
                                                    프로젝트를 구현하며 상태 관리보다 중요한 것은 “데이터 구조의 일관성”이라는 걸 배웠습니다.
                                                    특히 PocketBase를 이용하면서 관계형 데이터 설계의 중요성, 클라이언트에서의 실시간 동기화
                                                    처리를 직접 체득했습니다. UI 측면에서는 “즉각적인 피드백”과 “자연스러운 인터랙션”에 집중했습니다.
                                                    Skeleton, 다크모드, 버튼 상태 변화 등 작은 디테일들이 사용자 경험을 얼마나 풍부하게 만드는지 느낄 수 있었습니다.
                                                    마지막으로, 기능을 쌓는 것보다 하나의 기능을 끝까지 완성도 있게 구현하는 것의 중요성을 깨달았고,
                                                    그 덕분에 지금은 코드를 짤 때 “유지보수성과 사용자 경험”을 항상 함께 생각하게 되었습니다.
                                                </p>
                                            </span>
                                        </li>
                                    </ul>
                                </section>

                                <section
                                    id="screens"
                                    ref={sectionRefs.current[4]}
                                    className="project__article-section project__view"
                                >
                                    <h3 className="project__article-section-title">작업 화면</h3>
                                    <ul className="project__article-section-inner" aria-label="회고록">
                                        {detailImg.map((src, idx) => (
                                            <li className="project__image" key={`detail-${idx}`}>
                                                <img
                                                    src={src}
                                                    alt={detailImgAlt[idx] || `${title} - ${imgName} ${idx + 1}`}
                                                    loading="eager"
                                                    onClick={() => openPreview(src)}
                                                    role="button"
                                                    tabIndex={0}
                                                    aria-haspopup="dialog"
                                                    onKeyDown={(e) => {
                                                        if (e.key === "Enter" || e.key === " ") openPreview(src);
                                                    }}
                                                    style={{ cursor: "zoom-in" }}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </div>
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
