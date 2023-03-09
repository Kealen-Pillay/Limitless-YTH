import React from "react";
import "./HomeScreen.css";
import Hero from "../../images/hero.jpg";
import Navbar from "../Navbar/Navbar";

const HomeScreen = (): JSX.Element => {
    return (
        <>
            <section>
                <div id="img-container">
                    <Navbar/>
                    <img src={Hero} alt="hero"/>
                    <p>
                        Limitless
                    </p>
                </div>
            </section>
        </>
    );
}

export default HomeScreen;
