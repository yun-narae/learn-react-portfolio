// src/views/HomeView.jsx
import React from "react";
import Main from '../components/Main';
import Intro from '../components/Intro';
import Skill from '../components/Skill';
import Site from '../components/Site';
import Contact from '../components/Contact';

const HomeView = () => {
    return (
        <>
            <Intro />
            <Skill />
            <Site />
            <Contact />
        </>
    );
};

export default HomeView;
