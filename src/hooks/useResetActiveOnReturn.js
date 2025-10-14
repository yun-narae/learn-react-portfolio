// src/hooks/useResetActiveOnReturn.js
import { useEffect } from "react";
import { scrollTo, getLenis } from "../utils/smooth";

/**
 * 뒤/앞으로가기(bfcache 포함)로 다시 들어왔을 때만
 * - 해시 제거
 * - active를 0으로 초기화
 * - 최상단으로 이동(진행 중 스무스가 있으면 방해하지 않음)
 */
export default function useResetActiveOnReturn(onReset) {
    useEffect(() => {
        const reset = () => {
            try {
                const { pathname, search } = window.location;
                if (window.location.hash) {
                    window.history.replaceState(null, "", `${pathname}${search}`);
                }
            } catch {}
            if (typeof onReset === "function") onReset();

            const l = getLenis?.();
            if (l && (l.isScrolling || l.__isScrolling)) return;
            scrollTo(0, { immediate: true });
        };

        // back/forward 감지
        const nav = performance.getEntriesByType("navigation")[0];
        if (nav && nav.type === "back_forward") reset();

        // bfcache 복원
        const onPageShow = (e) => { if (e.persisted) reset(); };
        window.addEventListener("pageshow", onPageShow);
        return () => window.removeEventListener("pageshow", onPageShow);
    }, [onReset]);
}
