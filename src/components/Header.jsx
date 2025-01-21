import React, { useState, useRef, useEffect } from "react";
import { headerNav } from "../constants";

const Header = () => {
  const [isActive, setIsActive] = useState(false); // 햄버거 메뉴 열림/닫힘 상태
  const btnRef = useRef(null); // 햄버거 버튼 참조
  const navItemRefs = useRef([]); // nav 리스트 항목들 참조
  const [isSmallViewport, setIsSmallViewport] = useState(window.innerWidth <= 1020); // 1020px 뷰포트 너비 확인용 상태

  // 뷰포트 크기 변경 감지
  useEffect(() => {
    const handleResize = () => {
      setIsSmallViewport(window.innerWidth <= 1020);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      toggleMenu();
    }
  };

  // 메뉴 열림/닫힘 시 포커스 이동
  useEffect(() => {
    if (isActive) {
      // 메뉴가 열렸을 때 nav의 첫 번째 항목으로 포커스 이동
      navItemRefs.current[0]?.focus();
    } else if (!isActive && btnRef.current) {
      // 메뉴가 닫히면 햄버거 버튼으로 포커스 이동
      btnRef.current.focus();
    }
  }, [isActive]);

  return (
    <header id="header" role="banner">
      <div className="header__inner">
        {/* 로고 */}
        <h1 className="header__logo">
          <a href="/" tabIndex="0">
            portfolio<em>React</em>
          </a>
        </h1>

        {/* 네비게이션 */}
        <nav
          className={`header__nav ${isActive ? "active" : ""}`}
          role="navigation"
          aria-label="메인 메뉴"
        >
          <ul className="menu">
            {headerNav.map((nav, key) => (
              <li className="menu__list" key={key}>
                <a
                  className="menu__list__link"
                  href={nav.url}
                  tabIndex={isSmallViewport && !isActive ? "-1" : "0"} // 뷰포트가 작고 메뉴가 닫힌 경우 포커스 제외
                  ref={(el) => (navItemRefs.current[key] = el)} // 각 항목 참조 저장
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 햄버거 버튼 */}
        <div
          className="btn-box"
          id="headerToggle"
          role="button"
          tabIndex="0"
          aria-expanded={isActive ? "true" : "false"}
          aria-controls="primary-menu"
          onClick={toggleMenu}
          onKeyDown={handleKeyDown}
          ref={btnRef} // 햄버거 버튼 참조
        >
          <span>{isActive ? "햄" : "버거"}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
