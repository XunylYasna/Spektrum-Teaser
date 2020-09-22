import React from 'react';
import PropTypes from 'prop-types';
import { Container, Burger, Menu, Input } from './sidebar.css'
import TextLoop from 'react-text-loop'
import Footer from '../../footer'



const Sidebar = ({ isOpen, toggleSidebar }) => {
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
                        <TextLoop>
                            <span>______________</span>
                            <span>Design</span>
                            <span>Advertising</span>
                            <span>Technology</span>
                            <span>Marketing</span>
                        </TextLoop>
                    </h1>
                    <p>Subscribe to our mailing list to get notified.</p>
                    <form method="POST" autoComplete="off">
                        <Input>
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