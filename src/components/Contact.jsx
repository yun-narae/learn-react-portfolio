import React, { useState } from "react";

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "skfo0827@naver.com";

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // 2초 후 원래 상태로
        } catch (err) {
            console.error("이메일 복사 실패:", err);
            // 폴백: 구형 브라우저 지원
            const textarea = document.createElement("textarea");
            textarea.value = email;
            textarea.style.position = "fixed";
            textarea.style.opacity = "0";
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand("copy");
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (e) {
                console.error("폴백 복사도 실패:", e);
            }
            document.body.removeChild(textarea);
        }
    };

    return (
        <section id="contact">
            <div className="contact__inner">
                <h2 className="contact__title">Contact</h2>
                <div className="contact__info">
                    <div className="contact__info-text">
                        <h4>봐주셔서 감사합니다 :)</h4>
                        <p>
                            "꺼지지 않는 불꽃으로 사용자 경험을 빚는 개발자로서,<br/>낯선 기술에도 주저하지 않고 배우며,<br/>언제나 사용자의 입장에서 더 나은 서비스를 만들어가겠습니다."
                        </p>
                    </div>
                    <div className="contact__info-link">
                        <a
                            href="https://github.com/yun-narae"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="윤나래 GitHub로 이동"
                        >
                            <div className="contact__info-link-group">
                                <b>GitHub</b>
                                <span className="contact__info-link-group-divider" aria-hidden="true"></span>
                                    https://github.com/yun-narae
                            </div>
                        </a>
                        
                        <div 
                            className="contact__info-link-group clickable"
                            onClick={handleCopyEmail}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    handleCopyEmail();
                                }
                            }}
                            aria-label={copied ? "이메일 복사 완료" : "클릭하여 이메일 복사"}
                        >
                            <b>Mail</b>
                            <span className="contact__info-link-group-divider" aria-hidden="true"></span>
                            <p aria-label="윤나래 메일">
                                {email}
                                {copied && <span className="copy-tooltip">복사완료!</span>}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;