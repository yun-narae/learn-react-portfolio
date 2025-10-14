import Lenis from "lenis";

let lenis;           // 싱글톤 인스턴스
let rafId = null;    // RAF 루프 아이디

function startRAF() {
    if (rafId) return;
    const loop = (time) => {
        if (lenis) lenis.raf(time);
        rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
}

export default function smooth(options = {}) {
    if (lenis) return lenis;
    lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.8 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: true,
        ...options,
    });
    startRAF();
    if (typeof window !== "undefined") window.__lenis = lenis; // 디버깅용
    return lenis;
}

export const getLenis = () => lenis || (typeof window !== "undefined" ? window.__lenis : null);

/** Lenis가 멈춰있거나( stop() ) RAF가 죽었으면 자동 복구 */
export function ensureLenisRunning() {
    if (!lenis) smooth();
    // 일부 버전은 내부 플래그가 __isStopped 로 들어있음
    const stopped = lenis?.isStopped || lenis?.__isStopped;
    if (stopped && lenis?.start) lenis.start();
    startRAF();
    return lenis;
}

export function scrollTo(target, opts = {}) {
    const l = ensureLenisRunning();
    try {
        l.scrollTo(target, opts); // target: number | element | selector
    } catch {
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