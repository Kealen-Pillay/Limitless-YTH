import React from "react";
import "./HomeScreen.css";
import Hero from "../../images/hero.jpg";

const HomeScreen = (): JSX.Element => {
    return (
        <>
            <section>
                <div id="img-container">
                    <img src={Hero} alt="hero"/>
                        <p>
                            Limitless
                        </p>
                </div>
                <div>
                    <button>
                        <span>See More</span>
                    </button>
                </div>
            </section>
        </>
    );
}

export default HomeScreen;
