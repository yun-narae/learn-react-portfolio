// src/views/HomeView.jsx
import React from "react";
import Intro from '../components/Intro';
import Skill from '../components/Skill';
import Project from '../components/Project';
import Contact from '../components/Contact';

const HomeView = () => {
    return (
        <>
            <Intro />
            <Skill />
            <Project />
            <Contact />
        </>
    );
};

export default HomeView;
