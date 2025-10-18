import Lenis from "@studio-freight/lenis";

let lenis;

export function smooth() {
    if (lenis) return lenis;
    
    lenis = new Lenis({ 
        duration: 1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

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