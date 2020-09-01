import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="Contact">
            <div className="wrapper">
                <h2 className="Contact__title mb-3">Contact Me</h2>
                <div className="Contact__contact-option"><i className="fa fa-whatsapp"/>+8801799293133</div>
                <a href="mailto:shaponpal@gmail.com" target="_blank" className="Contact__contact-option"><i className="fa fa-envelope"/>shaponpal@gmail.com</a>
            </div>
        </div>
    );
}

export default Contact;
