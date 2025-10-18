import React from "react";

const Contact = () => {
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
                            GitHub
                        </a>

                        <a
                            href="mailto:skfo0827@naver.com"
                            aria-label="윤나래에게 메일 보내기"
                        >
                            Mail
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;