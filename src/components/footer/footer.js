import React from 'react';
import { FooterSection } from './footer.css'


const Footer = ({ isBlack }) => {
    return (
        <FooterSection isBlack={isBlack}>
            <div>
                <h1>Copyright</h1>
                <p>Spektrum Design Co © 2020</p>
            </div>
            <div>
                <h1>Clout</h1>
                <ul>
                    <li className="underline"><a href="https://www.instagram.com/spektrumdesignco/">Instagram</a></li>
                    <li className="underline"><a href="https://www.facebook.com/spektrumdesignco">Facebook</a></li>
                    <li className="underline"><a href="https://dribbble.com/spektrumdesignco/about">Dribble</a></li>
                    <li className="underline"><a href="https://www.linkedin.com/company/spektrumdesignco/">LinkedIn</a></li>
                </ul>
            </div>
            <div>
                <h1>Business Inquires</h1>
                <p><span className="underline">hello@spektrumdesign.co</span></p>
            </div>
        </FooterSection>
    )
}

export default Footer