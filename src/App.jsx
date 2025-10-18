// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { smooth } from "./utils/smooth";
import link from "./utils/link";
import RootLayout from "./layouts/RootLayout";
import HomeView from "./views/HomeView";
import ProjectDetail from "./components/ProjectDetail";

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
}

const App = () => {
    useEffect(() => {
        // 모바일에서 Lenis 초기화 지연
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const delay = isMobile ? 200 : 50;
        
        const timer = setTimeout(() => {
            smooth();
            link();
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route element={<RootLayout />}>
                    {/* "/" */}
                    <Route index element={<HomeView />} />
                    {/* "/projects/:id" */}
                    <Route path="projects/:id" element={<ProjectDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;