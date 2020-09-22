import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.aside`
display:flex;
`

export const Burger = styled.div`
  z-index:20;
  width: 40px;
  height: 30px;
  position: relative;
  background: transparent;
  margin: 50px auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 50%;
    background-color: var(--G400);
    opacity: 1;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: background-color 1s, transform .25s ease-in-out;
    -moz-transition: background-color 1s, transform .25s ease-in-out;
    -o-transition: background-color 1s, transform .25s ease-in-out;
    transition: background-color 1s, transform .25s ease-in-out;

    &:nth-child(even) {
      left: 50%;
      border-radius: 0 9px 9px 0;
    }

    &:nth-child(odd) {
      left:0px;
      border-radius: 9px 0 0 9px;
    }

    &:nth-child(1),
    &:nth-child(2){
      top: 0px;
    }

    &:nth-child(3),
    &:nth-child(4){
      top: 12px;
    }

    &:nth-child(5),
    &:nth-child(6){
      top: 24px;
    }
    
    ${({ isOpen }) => isOpen && `
      background-color: var(--G100);

      &:nth-child(1),
      &:nth-child(6){
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      &:nth-child(2),
      &:nth-child(5){
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }

      &:nth-child(1) {
        left: 5px;
        top: 11px;
      }

      &:nth-child(2) {
        left: calc(50% - 3px);
        top: 11px;
      }

      &:nth-child(3) {
        left: -50%;
        opacity: 0;
      }

      &:nth-child(4) {
        left: 100%;
        opacity: 0;
      }

      &:nth-child(5) {
        left: 5px;
        top: 22px;
      }

      &:nth-child(6) {
        left: calc(50% - 3px);
        top: 22px;
      }

    `}
  }

  &:active,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
    outline: none;
    background-color: transparent;
  }

  &:hover {
    background-color: transparent;
  }

  & + & {
    margin-left: 1rem;
  }
`;

export const Menu = styled.div`
  /* display:none; */
  position: absolute;
  height:0 !important;
  width:0 !important;
  opacity:0;
  z-index: 10;
  background-color: var(--G100);
  -webkit-transition: background-color 0.5s linear;
  -moz-transition: background-color 0.5s linear;
  -o-transition: background-color 0.5s linear;
  transition: background-color 0.5s linear;

  ${({ isOpen }) => isOpen && `
    opacity:1;
    display: flex;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100vw !important;
    height: 100vh !important;
    background-color: var(--G400);

    

  `}

  div.contact-container{
    display: none;
    flex-direction: column;
    align-self:center;
    padding-left:5vw;
    padding-right: 8vw;
    padding-top: 10vh;
    color: var(--G100);

    ${({ isOpen }) => isOpen && `
    display: flex;
    width: 100vw !important;
    height: auto;
    `}

  h1{
        font-size: 4rem;
        font-family: var(--ff-secondary);
        margin-bottom: 1rem;
        span.space{
            width: 10px;
        }
        
    }
  }

  p{
    padding-top: 0.2rem;
    font-size: 2rem;
  }

  form{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    ${MEDIA.MIN_TABLET`
        flex-direction: row;
    `};
    button{
      background: transparent;
      color: var(--G100);
      height: 6rem;
      width: 160px;
      font-size: 2rem;
      border: none;
      outline:none;
      margin-top: 10px;
      margin-left: -10px;
      ${MEDIA.MIN_TABLET`
        margin-left: -0px;
    `};
      &:hover{
        color: var(--G200);
        i{
          color: var(--G200);
        }
        cursor: pointer;
      }

      i{
        position: relative;
        display: inline-block;
        vertical-align: middle;
        color: var(--G100);
        box-sizing: border-box;
        width: 20px;
        height: 20px;
        border-width: 4px 4px 0 0;
        border-style: solid;
        margin: 10px;
        &:before{
            right: 0;
            top: -3px;
            position: absolute;
            height: 4px;
            box-shadow: inset 0 0 0 32px;
            transform: rotate(-45deg);
            width: 23px;
            transform-origin: right top;
        }

        &:after, &:before {
            content: "";
            box-sizing: border-box;
        }
    }
    }
  }
`;

export const Input = styled.div`
    position:relative;
    margin-top: 15px;
    /* Input */
    input{
        font-size:18px;
        padding:10px 10px 10px 5px;
        display:block;
        width:300px;
        border:none;
        background: transparent;
        border-bottom:1px solid var(--G100);
    }

    input:focus { 
        outline:none;
        background: transparent;
    }
    
    input~label {
        display:none;
    }
    /* Label */
    input:empty ~ label{
        display:flex;
        color:var(--G200); 
        font-size:18px;
        font-weight:normal;
        position:absolute;
        pointer-events:none;
        left:5px;
        top:10px;
        transition:0.2s ease all; 
        -moz-transition:0.2s ease all; 
        -webkit-transition:0.2s ease all;
    }

    input:focus ~ label, input:valid ~ label {
        top:-20px;
        font-size:14px;
        color:var(--G100);
    }

    input:invalid{
        color:var(--BRIGHT_RED);
        background: transparent;
    }

    input:valid{
      background: transparent;;
      color: var(--G100);
    }

    input:focus:required:invalid ~ label{
        color:var(--BRIGHT_RED);
    }

    input:not(:placeholder-shown) ~ label {
        top:-20px;
        font-size:14px;
    }

    input:not(:placeholder-shown):invalid ~ label{
        color:var(--BRIGHT_RED);
    }


    /* Bars */
    .bar{ 
        position:relative; 
        display:block; 
        width:315px; 
    }
    .bar:before, .bar:after{
        content:'';
        height:2px; 
        width:0;
        bottom:1px; 
        position:absolute;
        background:transparent; 
        transition:0.2s ease all; 
        -moz-transition:0.2s ease all; 
        -webkit-transition:0.2s ease all;
    }
    .bar:before {
        left:50%;
    }
    .bar:after {
        right:50%; 
    }

    input:focus ~ .bar:before, input:focus ~ .bar:after {
        width:50%;
    }

    /* Highliter */
    .highlight {
        position:absolute;
        height:60%; 
        width:100px; 
        top:25%; 
        left:0;
        pointer-events:none;
        opacity:0.5;
    }

    /* active state */
    input:focus ~ .highlight {
        -webkit-animation:inputHighlighter 0.3s ease;
        -moz-animation:inputHighlighter 0.3s ease;
        animation:inputHighlighter 0.3s ease;
    }

    /* ANIMATIONS ================ */
    @-webkit-keyframes inputHighlighter {
        from { background:#5264AE; }
        to 	{ width:0; background:transparent; }
    }
    @-moz-keyframes inputHighlighter {
        from { background:#5264AE; }
        to 	{ width:0; background:transparent; }
    }
    @keyframes inputHighlighter {
        from { background:#5264AE; }
        to 	{ width:0; background:transparent; }
    }
`
