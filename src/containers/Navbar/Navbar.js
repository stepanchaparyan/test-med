import React from 'react';
import { Container } from './NavbarStyled';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <Container>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/lessons">Lessons</Link>
        <Link className='link' to="/addLesson">Add Lesson</Link>
        <Link className='link' to="/students">Students</Link>
        <Link className='link' to="/addStudent">Add Student</Link>
    </Container>
  );
};

export default Navbar;