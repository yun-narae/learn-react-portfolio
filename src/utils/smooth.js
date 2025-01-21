import Lenis from "@studio-freight/lenis";

const smooth = () => {
    const smooth = new Lenis({
        duration: 1.5, // 좀 더 느리게, 스크롤 시간이 길어짐
        easing: (t) => Math.min(1, 1.8 - Math.pow(2, -10 * t)), // 더 강렬한 easing 효과
        smoothWheel: true, // 마우스 휠의 스크롤을 부드럽게 처리
        smoothTouch: true, // 터치 스크롤도 부드럽게 처리
    });

    function raf(time) {
        smooth.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 스크롤 이벤트를 더 눈에 띄게 로그로 출력
    smooth.on("scroll", (e) => {
        console.log("Smooth Scroll Event:", e);
        // 스크롤 위치를 화면에 표시 (디버깅용)
        console.log("Scroll Position:", e.scroll);
    });
};

export default smooth;
