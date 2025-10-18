// 이미지 최적화 유틸리티
export const optimizeImage = (src, options = {}) => {
    const {
        width = 400,
        height = 'auto',
        quality = 80,
        format = 'webp'
    } = options;

    // 이미지가 이미 최적화된 경우 원본 반환
    if (src.includes('optimized') || src.includes('compressed')) {
        return src;
    }

    // 개발 환경에서는 원본 이미지 사용
    if (process.env.NODE_ENV === 'development') {
        return src;
    }

    // 프로덕션에서는 최적화된 이미지 사용
    // 실제로는 이미지 CDN이나 최적화 서비스를 사용하는 것이 좋습니다
    return src;
};

// 이미지 preload 함수
export const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
};

// 여러 이미지 preload
export const preloadImages = async (srcs) => {
    try {
        await Promise.all(srcs.map(src => preloadImage(src)));
    } catch (error) {
        console.warn('Some images failed to preload:', error);
    }
};
