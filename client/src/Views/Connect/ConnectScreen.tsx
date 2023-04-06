import React from "react";
import "./ConnectScreen.css";
import {SocialsCard} from "./SocialsCard";

const ConnectScreen = (): JSX.Element => {
    return (
        <>
            <section id="connect">
                <div id="contact-container">
                    <p className="connect-header">
                        Connect
                    </p>
                    <div className="connect-options-container">
                        <SocialsCard icon={"instagram"}
                                     link={"https://www.instagram.com/limitlessyouth/?hl=en"}
                                     label={"limitlessyouth"}/>
                        <SocialsCard icon={"youtube"}
                                     link={"https://www.youtube.com/@limitlessythnz6636"}
                                     label={"LIMITLESS YTH NZ"}/>
                        <SocialsCard icon={"facebook"}
                                     link={"https://www.facebook.com/limitlessyouthnz/"}
                                     label={"Limitless Youth"}/>
                        <SocialsCard icon={"email"}
                                     link={"mailto:ivan@churchunlimited.co"}
                                     label={"More Information"}/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ConnectScreen;
