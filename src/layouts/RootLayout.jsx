// src/layouts/RootLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
