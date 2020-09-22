import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container, Logo } from './header.css';
import Sidebar from 'components/header/sidebar'
import logoNavBlack from '../../images/Logo_Black_Transparent.png'
import logoNavWhite from '../../images//Logo_White_Transparent.png'

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ title }) => {

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <AnimatedContainer>
      <Container>
        <Link to="/" style={{ zIndex: 20 }}>
          <Logo src={logoNavBlack} show={!isOpen} alt={title}></Logo>
          <Logo src={logoNavWhite} show={isOpen} alt={title}></Logo>
        </Link>

        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </Container>
    </AnimatedContainer>
  )
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
