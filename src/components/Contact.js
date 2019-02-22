import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
  return (
    <div>
      <Navbar/>
      <div class="Contact">
        <h1> Contact Me</h1>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
          <label>
            What do you want to yell about now?
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <Footer/>

    </div>
  );
}

export default Contact
