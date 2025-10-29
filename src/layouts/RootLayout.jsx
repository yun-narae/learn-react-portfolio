import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop/BackToTop";
import CopyEmail from "../components/CopyEmail/CopyEmail";

const RootLayout = () => {
    const { pathname } = useLocation();
    const hideHeader = /^\/projects\/[^/]+$/.test(pathname);

    return (
        <div id="wrap">
            {!hideHeader && <Header />}
            <main id="main" role="main">
                <Outlet />
            </main>
            <CopyEmail />
            <BackToTop />
            <Footer />
        </div>
    );
};

export default RootLayout;
