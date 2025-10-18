import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop/BackToTop";

const RootLayout = () => {
    const { pathname } = useLocation();
    const hideHeader = /^\/projects\/[^/]+$/.test(pathname);

    return (
        <div id="wrap">
            {!hideHeader && <Header />}
            <main id="main">
                <Outlet />
            </main>
            <BackToTop />
            <Footer />
        </div>
    );
};

export default RootLayout;
