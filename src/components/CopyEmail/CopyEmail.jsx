import React, { useState } from "react";
import SvgIcon from "../SvgIcon/SvgIcon";

export default function CopyEmail() {
    const [copied, setCopied] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
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

    const onKey = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleCopyEmail();
        }
    };

    return (
        <button
            type="button"
            className="copyemail"
            aria-label={copied ? "이메일 복사 완료" : "이메일 복사하기"}
            onClick={handleCopyEmail}
            onKeyDown={onKey}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <SvgIcon name={isHovered ? "mail-open" : "mail-close"} />
            {copied && (
                <span className="copyemail__tooltip">
                    복사완료!
                    <span className="copyemail__tooltip-arrow"></span>
                </span>
            )}
        </button>
    );
}

