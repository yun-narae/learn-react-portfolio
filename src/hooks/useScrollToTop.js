// src/hooks/useScrollToTop.js
import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollTo, getLenis } from "../utils/smooth";

/**
 * - 최초 로드(새로고침 포함) 1회: 최상단으로 즉시 이동
 * - pathname이 바뀔 때마다 1회: 최상단으로 즉시 이동
 * - 진행 중인 스무스 스크롤이 있으면 방해하지 않음
 */
export default function useScrollToTop() {
    const { pathname } = useLocation();

    // 최초 1회 (reload 포함)
    useLayoutEffect(() => {
        scrollTo(0, { immediate: true });
    }, []);

    // 라우트 변경마다
    useEffect(() => {
        const l = getLenis?.();
        if (l && (l.isScrolling || l.__isScrolling)) return; // 진행 중이면 패스
        scrollTo(0, { immediate: true });
    }, [pathname]);
}
