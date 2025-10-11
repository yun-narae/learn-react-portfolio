// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import smooth from "./utils/smooth";
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
        smooth();
        link();
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
