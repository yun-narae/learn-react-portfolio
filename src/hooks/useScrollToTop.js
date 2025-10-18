// src/hooks/useScrollToTop.js
import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollTo, getLenis } from "../utils/smooth";

/**
 * - 최초 로드(새로고침 포함) 1회: 최상단으로 즉시 이동
 * - 라우트(pathname) 변경마다 1회: 최상단으로 즉시 이동
 * - 뒤/앞으로가기(bfcache 복원) 시: 브라우저 복원 이후에 최상단으로 재설정
 * - 진행 중 Lenis 스크롤이 있으면 방해하지 않음
 */
export default function useScrollToTop() {
    const { pathname } = useLocation();

    // 초기 1회: 수동 스크롤 복원 + 최상단
    useLayoutEffect(() => {
        let prev;
        if ("scrollRestoration" in window.history) {
            prev = window.history.scrollRestoration;
            window.history.scrollRestoration = "manual";
        }

        // 첫 진입은 바로 0으로
        scrollTo(0, { immediate: true });

        // BFCache 복원(back/forward) 시에도 최상단으로
        const onPageShow = (e) => {
            const isBF =
                e.persisted ||
                (performance.getEntriesByType("navigation")[0]?.type === "back_forward");

            if (!isBF) return;

            // 진행 중 스무스가 있으면 방해하지 않음
            const l = getLenis?.();
            if (l && (l.isScrolling || l.__isScrolling)) return;

            // 브라우저 복원 이후 프레임에 강제 상단
            requestAnimationFrame(() => scrollTo(0, { immediate: true }));
        };

        window.addEventListener("pageshow", onPageShow);

        return () => {
            window.removeEventListener("pageshow", onPageShow);
            if (prev) window.history.scrollRestoration = prev;
        };
    }, []);

    // 라우트 변경 시 최상단
    useEffect(() => {
        const l = getLenis?.();
        if (l && (l.isScrolling || l.__isScrolling)) return;
        scrollTo(0, { immediate: true });
    }, [pathname]);
}
