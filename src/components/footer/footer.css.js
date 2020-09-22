import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const FooterSection = styled.section`
  display:flex;
  flex-direction:column;
  max-width:100%;
  background-color: transparent;
  font-size: 2rem;
  padding-bottom: 1.5rem;
  width: 90vw;
  margin-left:5vw;
  margin-top: 5rem;

  position: absolute;
  bottom: 0;
  min-height: 6rem;

  ${MEDIA.MIN_DESKTOP`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  `};

  ${MEDIA.PHONE`
    margin-top: 3rem;
    margin-bottom: 1rem;
  `};

  h1{
    margin-top: 3rem;
    font-size: 1.7rem !important;
    color: var(--G400);

    ${({ isBlack }) => isBlack && `
        color: var(--G100);
  `}

    margin-bottom: 1rem;
  }
  p, li, a, span{
    line-height: 1;
    font-size: 1.5rem !important;
    color: var(--G200);
    margin-bottom: 0;

  }
  p{
    margin-bottom: 0;
  }
  ul{
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
  }

  li{
    margin-right: 3rem;
  }
  
  .underline{
    border-bottom: 1px solid currentColor;
  }
`