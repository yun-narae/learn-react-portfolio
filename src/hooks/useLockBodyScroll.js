// src/hooks/useLockBodyScroll.jsx
import { useLayoutEffect, useRef } from "react";

export default function useLockBodyScroll(locked) {
    const scrollYRef = useRef(0);

    useLayoutEffect(() => {
        const { body, documentElement: html } = document;

        if (!locked) {
            // 복원
            const y = scrollYRef.current || 0;
            body.style.removeProperty("overflow");
            html.style.removeProperty("overflow");
            body.style.removeProperty("position");
            body.style.removeProperty("top");
            body.style.removeProperty("width");
            body.style.removeProperty("paddingRight");
            window.scrollTo(0, y);
            return;
        }

        // 잠금
        scrollYRef.current = window.scrollY || window.pageYOffset;

        // 스크롤바 보정(레이아웃 흔들림 방지)
        const scrollbarGap = window.innerWidth - html.clientWidth;

        // 일부 환경은 html이 스크롤러라서 둘 다 막음
        body.style.overflow = "hidden";
        html.style.overflow = "hidden";

        // iOS/데스크톱 공통 안전빵: body 고정
        body.style.position = "fixed";
        body.style.top = `-${scrollYRef.current}px`;
        body.style.width = "100%";
        if (scrollbarGap > 0) body.style.paddingRight = `${scrollbarGap}px`;

        return () => {
            const y = scrollYRef.current || 0;
            body.style.removeProperty("overflow");
            html.style.removeProperty("overflow");
            body.style.removeProperty("position");
            body.style.removeProperty("top");
            body.style.removeProperty("width");
            body.style.removeProperty("paddingRight");
            window.scrollTo(0, y);
        };
    }, [locked]);
}
