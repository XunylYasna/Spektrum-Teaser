import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

:root {
  /* Colors */
  /* // Gray Scale (lightest to Darkets) */
    --G100: #FFFFFF;
    --G200: #6A6A6A;
    --G300: #3D3D3D;
    --G400: #000000;

    /* // Logo Colors */
    --BRIGHT_RED: #DB4437;
    --STRONG_RED: #D8320A;
    --BRIGHT_ORANGE: #FCBD30;
    --VIVID_ORANGE: #FCB000;
    --VIVID_YELLOW: #FFFF00;
    --STRONG_GREEN: #2EC318;
    --BRIGHT_GREEN: #31D095;
    --VIVID_BLUE: #209AFA;
    --LIGHT_BLUE: #8CBBFF;
    --LIGHT_NAVY: #546AFA;
    --STRONG_NAVY: #19188C;

    /* // Pantone */
    --P032C: #EF3340;
    --P485C: #DA291C;
    --P114C: #FDDA24;
    --P130C: #F2A900;
    --P3945C: #F3E500;
    --P2421C: #31B700;
    --P24112C: #48D597;
    --P2925C: #009CDE;
    --P2128C: #98B6E4;
    --P299C: #546AFA;


    --ff-primary: Helvetica,Times New Roman;
    --ff-secondary: Helvetica Neue, "Heebo", sans-serif;
    --ff-tertiary: League Gothic, "Oswald", sans-serif;
    --ff-quaternary: Bebas Neue, sans-serif;
}

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre, 
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    line-height: 1;
    font-size: 1.6rem;
    color: #000;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  .canvas-div{
    overflow-x:hidden;
    z-index: -1;
    position: fixed;
    margin-top: -25vh;
  }
  .canvas-div > canvas{
    width: 100vw;
    height: 100vh;
  }
  .canvas-div > canvas:focus{
    outline:none;
  }
  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: '#333';
  }

  pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    color: '#333';
    border: 1px solid #ddd;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
  }

  video {
    max-width: 100%;
  }

  p {
    margin-bottom: 2rem;
  }
`;
