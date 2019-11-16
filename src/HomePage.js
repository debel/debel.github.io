import React from 'react';
import Header from './Header';
import Table from './Table';

import { presentations, courses, hobbies } from './data';

import './HomePage.css';

const HomePage = () => {
  return (<>
    <Header />
    <Table
      title="Conference talks and presentations"
      items={presentations} />
    <Table
      title="Short courses and learning materials"
      items={courses} />
    <Table
      title="Hobby projects"
      items={hobbies} />
  </>);
};

export default HomePage;
