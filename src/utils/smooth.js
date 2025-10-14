// src/utils/smooth.js
import Lenis from "@studio-freight/lenis";

let lenis; // 싱글톤

export default function smooth(options = {}) {
    if (lenis) return lenis; // 중복 초기화 방지
    lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.8 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: true,
        ...options,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (typeof window !== "undefined") window.__lenis = lenis; // 디버깅용
    return lenis;
}

// ⬇️ named exports 추가
export const getLenis = () => lenis || (typeof window !== "undefined" ? window.__lenis : null);

export function scrollTo(target, opts = {}) {
    const l = getLenis() || smooth();
    try {
        l.scrollTo(target, opts); // target: number | selector | element
    } catch {
        // 폴백 (숫자/엘리먼트 둘 다 지원)
        if (typeof target === "number") {
            window.scrollTo({ top: target, behavior: "smooth" });
        } else if (target instanceof Element) {
            const top = target.getBoundingClientRect().top + window.pageYOffset + (opts.offset || 0);
            window.scrollTo({ top, behavior: "smooth" });
        }
    }
}

export function scrollToY(y, opts = {}) {
    const l = getLenis() || smooth();
    try {
        l.scrollTo(y, opts);
    } catch {
        window.scrollTo({ top: y, behavior: "smooth" });
    }
}
