import Lenis from "@studio-freight/lenis";

let lenis;
let rafId;

export function smooth() {
    if (lenis) return lenis;
    
    // 모바일 감지
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    lenis = new Lenis({ 
        duration: isMobile ? 0.8 : 1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: true,
        wheelMultiplier: 1,
        touchMultiplier: isMobile ? 1.5 : 2,
        // 모바일에서 터치 스크롤 강화
        touchInertiaMultiplier: isMobile ? 35 : 25,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // 디버깅용
    if (typeof window !== "undefined") {
        window.__lenis = lenis;
    }

    return lenis;
}

export function scrollTo(target, opts = {}) {
    if (!lenis) smooth();
    
    try {
        lenis.scrollTo(target, opts);
    } catch (error) {
        console.warn("Lenis scrollTo failed, using fallback:", error);
        // 폴백
        if (typeof target === "number") {
            window.scrollTo({ top: target, behavior: "smooth" });
        } else if (target instanceof Element) {
            const top = target.getBoundingClientRect().top + window.pageYOffset + (opts.offset || 0);
            window.scrollTo({ top, behavior: "smooth" });
        } else if (typeof target === "string") {
            const el = document.querySelector(target);
            if (el) {
                const top = el.getBoundingClientRect().top + window.pageYOffset + (opts.offset || 0);
                window.scrollTo({ top, behavior: "smooth" });
            }
        }
    }
}

export const getLenis = () => lenis;

// 정리 함수 추가
export const destroySmooth = () => {
    if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
    }
    if (lenis) {
        lenis.destroy();
        lenis = null;
    }
};