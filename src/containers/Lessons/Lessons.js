import React from 'react';
import { Container } from './LessonsStyled';
import Lesson from "./Lesson";
import { initialLessonsList } from '../../mockData/Lessons';

const Lessons = () => {
  return (
    <Container>
        <h1>Here are our lessons</h1>
        <table>
          <tr className="lessons">
              <td className="lesson">Name</td>
              <td className="lesson">Duration</td>
              <td className="lesson">Price</td>
              <td className="lesson">LecturerName</td>
              <td className="lesson">RegisterDate</td>
          </tr>
          {initialLessonsList.map(lesson => (
            <Lesson lesson={lesson}></Lesson>
          ))}
        </table>
    </Container>
  );
};

export default Lessons;
