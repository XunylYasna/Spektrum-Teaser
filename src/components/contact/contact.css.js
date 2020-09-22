import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const ContactSection = styled.section`
    position: absolute;
    height:0 !important;
    width:0 !important;

    display: flex;
    flex-direction: column;
    -webkit-transition: all 0.5s linear;
    -moz-transition: all 0.5s linear;
    -o-transition: all 0.5s linear;
    transition: all 0.5s linear;

    ${({ isOpen }) => isOpen && `
        opacity:1;
        display: flex;
        position: fixed;
        bottom: 0;
        right: 0;
        width: 100vw !important;
        height: 100vh !important;
        background-color: var(--G400);
        padding-top: 20vh;
    `}
`

export const ContactContainer = styled.div`
    color: var(--G100);
    padding:10rem;
    padding-top: 30vh;
    display: flex;
    h1{
        font-size: 4rem;
        font-family: var(--ff-secondary);

        /* div{
            margin-left: 10px;
            ${MEDIA.PHONE`
                margin-left: 0px;
            `};
        } */
    }
`

export const ContactForm = styled.form`

`