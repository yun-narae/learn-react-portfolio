import React from "react";
import { contactText } from "../constants";

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact__inner">
                <h2 className="contact__title">Contact</h2>
                <div className="contact__text">
                    <div className="text">
                        {contactText.map((contact, key) => (
                            <div key={key}>
                                <a href={contact.link}>
                                    {contact.title}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;