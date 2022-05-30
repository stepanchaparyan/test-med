import React from 'react';
import { Container } from './NavbarStyled';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <Container>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/shop">Shop</Link>
        <Link className='link' to="/addmedicine">New Medicine</Link>
    </Container>
  );
};

export default Navbar;