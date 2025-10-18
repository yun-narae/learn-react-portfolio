import React, { useEffect, useRef, useState } from "react";
import { scrollTo } from "../../utils/smooth";
import useScrollToTop from "../../hooks/useScrollToTop";
import SvgIcon from "../SvgIcon/SvgIcon";

const SHOW_AT = 240; // px

export default function BackToTop() {
    useScrollToTop(); // 라우팅/리로드 시 최상단 이동

    const [visible, setVisible] = useState(false);
    const rafRef = useRef(null);

    useEffect(() => {
        const update = () => {
            rafRef.current = null;
            const y = window.scrollY || window.pageYOffset;
            setVisible(y > SHOW_AT);
        };
        const onScroll = () => {
            if (rafRef.current) return;
            rafRef.current = requestAnimationFrame(update);
        };

        // 초기 1회 상태 동기화
        update();

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    const goTop = () => {
        scrollTo(0, { duration: 0.8, immediate: false });
    };

    const onKey = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            goTop();
        }
    };

    return (
        <button
            type="button"
            className={`backtotop ${visible ? "is-visible" : ""}`}
            aria-label="맨 위로 이동"
            onClick={goTop}
            onKeyDown={onKey}
        >
            <SvgIcon name="arrow-up" />
        </button>
    );
}
