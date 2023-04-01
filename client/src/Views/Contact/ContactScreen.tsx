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
                                    <input name="name_val" required type="text"/>
                                </div>
                                <div className="personals-input">
                                    <span>Phone Number</span>
                                    <input name="phone_val" required type="text"/>
                                </div>
                            </div>
                            <div className="other-contact-input-container">
                                <div className="email-input-container">
                                    <span>Email</span>
                                    <input name="email_val" required type="email"/>
                                </div>
                                <div className="subject-input-container">
                                    <span>Subject</span>
                                    <input name="subject_val" required type="text"/>
                                </div>
                                <div className="message-input-container">
                                    <span>Your Message</span>
                                    <textarea name="message_val" required/>
                                </div>
                            </div>
                            <button className="send-button">
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
