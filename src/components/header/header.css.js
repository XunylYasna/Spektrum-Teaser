import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';


export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 8rem;
  
  ${MEDIA.TABLET`
  padding: 4rem 3rem;
  `};

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;

export const Logo = styled.img`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: 10;

  ${({ show }) => show && `
    opacity:1;
    width: 150px;
    height: auto;
  `}
`
