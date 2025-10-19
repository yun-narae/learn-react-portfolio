import React from "react";
import { scrollTo } from "../../utils/smooth";
import useScrollToTop from "../../hooks/useScrollToTop";
import SvgIcon from "../SvgIcon/SvgIcon";

export default function BackToTop() {
    useScrollToTop(); // 라우팅/리로드 시 최상단 이동

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
            className="backtotop"
            aria-label="맨 위로 이동"
            onClick={goTop}
            onKeyDown={onKey}
        >
            <SvgIcon name="arrow-up" />
        </button>
    );
}
