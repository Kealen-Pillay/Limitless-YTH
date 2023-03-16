import React from "react";
import "./HomeScreen.css";
import Hero from "../../images/hero.jpg";
import Navbar from "../Navbar/Navbar";

const HomeScreen = (): JSX.Element => {
    return (
        <>
            <section id="home">
                <Navbar/>
                <img src={Hero} alt="hero"/>
                <p className="home-header">
                    Limitless
                </p>
            </section>
        </>
    );
}

export default HomeScreen;
