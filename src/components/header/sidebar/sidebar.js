import React from 'react';
import PropTypes from 'prop-types';
import { Container, Burger, Menu, Input } from './sidebar.css'
import TextLoop from 'react-text-loop'
import Footer from '../../footer'
import { navigate } from 'gatsby-link'


const Sidebar = ({ isOpen, toggleSidebar }) => {

    const encode = (data) => {
        return Object.keys(data)
            .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&')
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...this.state,
            }),
        })
            .then(() => navigate(form.getAttribute('action')))
            .catch((error) => alert(error))
    }

    return (
        <Container>
            <Burger isOpen={isOpen} onClick={toggleSidebar}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </Burger>
            <Menu isOpen={isOpen}>
                <div className="contact-container">
                    <h1>We&apos;re always thinking about the future of <span className="space" />
                        <TextLoop interval={1800}>
                            <h3>______________</h3>
                            <h3>Design</h3>
                            <h3>Advertising</h3>
                            <h3>Technology</h3>
                            <h3>Marketing</h3>
                        </TextLoop>
                    </h1>
                    <p>Subscribe to our mailing list to get notified.</p>

                    {/* Form */}
                    <form name="subscribe" action="/" method="POST" autoComplete="off" netlify-honeypot="bot-field" data-netlify="true" onSubmit={handleSubmit}>
                        <Input>
                            <p className="hidden">
                                <label>Don’t fill this out if you are human: <input name="bot-field" /></label>
                            </p>
                            <input placeholder=" " type="email" id="email" name="email" required></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label htmlFor="email">Email Address*</label>
                        </Input>
                        <button type="submit">Subscribe <i className="icono-arrow1-right-up"></i></button>
                    </form>
                </div>
            </Menu>
        </Container>
    )
}

Sidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;