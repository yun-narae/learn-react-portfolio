import React from "react";
import { footerText } from "../constants";

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <div className="footer__info">

                </div>
                <div className="footer__inner-info">
                    © 2025 portfolio<br />
                    이 사이트는 리액트를 이용하여 제작하였습니다.
                </div>
            </div>
        </footer>
    );
};

export default Footer;