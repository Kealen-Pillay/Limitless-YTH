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
                                    <input required type="text"/>
                                </div>
                                <div className="personals-input">
                                    <span>Phone Number</span>
                                    <input required type="number"/>
                                </div>
                            </div>
                            <div className="email-input-container">
                                <span>Email</span>
                                <input required type="email"/>
                            </div>
                            <div className="subject-input-container">
                                <span>Subject</span>
                                <input required type="text"/>
                            </div>
                            <div className="message-input-container">
                                <span>Your Message</span>
                                <textarea required/>
                            </div>
                            <button>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactScreen;
