import React from 'react';
import { Container } from './LessonsStyled';
import { months } from '../../mockData/Lessons';

const Lesson = ({lesson}) => {
  const { name, duration, price, lecturerName, registerDate } = lesson;

  return (
    <Container>
      <tr className="lessons" key={name}>
        <td className="lesson">{name}</td>
        <td className="lesson">{duration}</td>
        <td className="lesson">{price}</td>
        <td className="lesson">{lecturerName}</td>
        <td className="lesson">{`${registerDate.getFullYear()}, ${months[registerDate.getMonth()]}`}</td>
      </tr>
    </Container>
  );
};

export default Lesson;