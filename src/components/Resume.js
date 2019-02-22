import React from 'react';

import Navbar from './Navbar'
import Footer from './Footer'


function Resume() {
  return (
    <div>
      <Navbar/>
      <div class="resume">
      <h1> Resume </h1>
      <img src="./Lester_Resume.png" alt="Lester's Resume"></img>
      </div>
      <Footer/>
    </div>
  );
}

export default Resume
