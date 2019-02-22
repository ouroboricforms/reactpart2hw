import projects from '../data/projects.json';
import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

class Projects extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
          <div class="projects">
          <h1>Projects</h1>
            <p>Nothing at this moment</p>
          </div>
        <Footer/>
      </div>
  )
}
}

export default Projects
