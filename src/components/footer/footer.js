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
                    <li className="underline"><a href="https://www.facebook.com/">Instagram</a></li>
                    <li className="underline"><a href="https://www.facebook.com/">Behance</a></li>
                    <li className="underline"><a href="https://www.facebook.com/">Dribble</a></li>
                    <li className="underline"><a href="https://www.facebook.com/">LinkedIn</a></li>
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