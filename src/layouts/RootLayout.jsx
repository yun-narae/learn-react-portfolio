// src/layouts/RootLayout.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
    const { pathname } = useLocation();
    // /projects/:id 에서만 헤더 숨김
    const hideHeader = /^\/projects\/[^/]+$/.test(pathname);

    return (
        <div id="wrap">
            {!hideHeader && <Header />}
            <main id="main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;
