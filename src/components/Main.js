import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Main() {
  return (
    <div>
    <Navbar/>
    <div class="Intro">
      <h1>Lester Caballero</h1>
      <img src="./Lester.Caballero01.jpg" alt="Lesters Profile" class="picture"></img>
      <p class="maintext">Born in 1985, I was on the cusp of the tech boom. I witnessed the growth of
      the internet as far as it goes for commercial use. I learned HTML in 1997 with
    notepad as my tool of choice. I then found more things to develop my creativity
   such as the adobe photoshop. My mind for design and the arts found a rare coupling
  with analytical thinking. I enjoy Math just as much as I enjoy learning and performing
  music.</p>
      <Footer/>
      </div>
    </div>
  );
}

export default Main
