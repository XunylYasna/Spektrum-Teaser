import React from 'react';
import { ContactSection, ContactContainer, ContactForm } from './contact.css'
import TextLoop from 'react-text-loop'

const Contact = ({ isOpen }) => {

    return (
        <ContactSection isOpen>
            {/* <ContactContainer>
                <h1>
                    We&apos;re always thinking about the future of
                    <TextLoop>
                        <span>______________</span>
                        <span>Design</span>
                        <span>Advertising</span>
                        <span>Technology</span>
                        <span>Marketing</span>
                    </TextLoop>
                </h1>
                <ContactForm method="POST">
                    <label htmlFor="email">Subscribe to our mailing list
                    <input type="email" name="email" id="email"></input>
                    </label>
                    <button type="submit">Notify Me</button>
                </ContactForm>
            </ContactContainer> */}
        </ContactSection>
    )
}


export default Contact;