// src/components/Header.jsx
import React from "react";
import { headerNav } from "../constants";
import SvgIcon from './SvgIcon/SvgIcon';

const Header = () => {
    return (
        <header id="header" role="banner">
            <div className="header__inner">
                {/* 로고 */}
                <h1>
                    <a href="/" tabIndex={0} aria-label="홈으로 이동">
                        <SvgIcon 
                            className="header__icon"
                            name="small-flame"
                        />
                    </a>
                </h1>
                
                {/* 데스크톱 전용 네비게이션 (모바일에서는 CSS로 숨김) */}
                <nav className="header__nav" role="navigation" aria-label="메인 메뉴">
                    <ul className="menu">
                        {headerNav.map((nav, idx) => (
                            <li className="menu__list" key={idx}>
                                <a className="menu__list__link" href={nav.url}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
