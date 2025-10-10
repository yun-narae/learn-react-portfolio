import React, { useEffect, useRef, useState } from "react";
import { siteText } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const MOBILE_MAX = 800;

const Site = () => {
  const [isMobile, setIsMobile] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // 화면 크기에 따라 모바일 여부 감지
  useEffect(() => {
    const mq = window.matchMedia(`(max-width:${MOBILE_MAX}px)`);
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);

    // 최신/구형 브라우저 대응
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  return (
    <section id="site" className="site">
      <div className="site__inner">
        <header className="site__header">
          <h2 className="site__title">
            SITE CODING
            <em>나의 작업물</em>
          </h2>

          {!isMobile && (
            <nav className="site__nav" aria-label="사이트 슬라이더 내비게이션">
              <button ref={prevRef} className="swiper-prev" type="button" aria-label="이전 슬라이드">◀</button>
              <button ref={nextRef} className="swiper-next" type="button" aria-label="다음 슬라이드">▶</button>
            </nav>
          )}
        </header>

        {isMobile ? (
          // ✅ 모바일: 스와이퍼 대신 단순 리스트
          <div className="site__list">
            {siteText.map(({ text, title, code, view, info }, idx) => (
              <article className={`site__item s${idx + 1}`} key={title ?? idx}>
                <span className="num">{idx + 1}.</span>

                <div className="text">
                  {text?.slice(0, 3).map((t, i) => <div key={i}>{t}</div>)}
                </div>

                <h3 className="title">{title}</h3>

                <div className="btn">
                  <a href={code} target="_blank" rel="noopener noreferrer">Code</a>
                  <a href={view} target="_blank" rel="noopener noreferrer">View</a>
                </div>

                <div className="info"><span>{info?.[0]}</span></div>
              </article>
            ))}
          </div>
        ) : (
          // 🖥️ 데스크톱: Swiper 사용
          <Swiper
            modules={[Navigation]}
            onBeforeInit={(s) => {
              s.params.navigation.prevEl = prevRef.current;
              s.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              0:   { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200:{ slidesPerView: 3 },
            }}
            className="site__wrap"
          >
            {siteText.map(({ text, title, code, view, info }, idx) => (
              <SwiperSlide key={title ?? idx}>
                <article className={`site__item s${idx + 1}`}>
                  <span className="num">{idx + 1}.</span>

                  <div className="text">
                    {text?.slice(0, 3).map((t, i) => <div key={i}>{t}</div>)}
                  </div>

                  <h3 className="title">{title}</h3>

                  <div className="btn">
                    <a href={code} target="_blank" rel="noopener noreferrer">Code</a>
                    <a href={view} target="_blank" rel="noopener noreferrer">View</a>
                  </div>

                  <div className="info"><span>{info?.[0]}</span></div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Site;
