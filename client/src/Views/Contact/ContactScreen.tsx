import React from "react";
import "../Contact/ContactScreen.css";

const ContactScreen = (): JSX.Element => {
    return (
        <>
            <section id="contact">
                <div id="contact-container">
                    <p className="contact-header">
                        Contact Us
                    </p>
                    <div className="form-container">
                        <form>
                            <div className="personals-input-container">
                                <div className="personals-input">
                                    <span>Full Name</span>
                                    <input type="text"/>
                                </div>
                                <div className="personals-input">
                                    <span>Email</span>
                                    <input type="text"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactScreen;
