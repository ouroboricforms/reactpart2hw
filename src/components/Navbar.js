import React from 'react';
import { Link as Link} from "react-router-dom";

import Main from './Main'
import Resume from './Resume'
import Project from './Projects'
import Contact from './Contact'

class Navbar extends React.Component{
    render() {
        return (
            <nav>
              <div>
                <ul>
                  <li><Link to ="/Main">Home</Link></li>
                  <li><Link to ="/Projects">Projects</Link></li>
                  <li><Link to ="/Resume">Resume</Link></li>
                  <li><Link to ="/Contact">Contact</Link></li>
                </ul>
              </div>
            </nav>
        );
    }
}

export default Navbar
