import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from './containers/Welcome/Welcome';
import Lessons from './containers/Lessons/Lessons';
import AddLesson from './containers/AddLesson/AddLesson';
import Students from './containers/Students/Students';
import AddStudent from './containers/AddStudent/AddStudent';


const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/lessons/*" element={<Lessons />} />
      <Route path="/addLesson/*" element={<AddLesson/>} />
      <Route path="/students/*" element={<Students />} />
      <Route path="/addStudent/*" element={<AddStudent/>} />
    </Routes>
  );
};

export default MyRoutes;