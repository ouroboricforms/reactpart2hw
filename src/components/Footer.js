import React from 'react';
import { BrowserRouter } from 'react-router';

import SocialLinks from './SocialLinks'

class Footer extends React.Component{
    render() {
        return (
            <nav>
              <div>
                <ul>
                  <SocialLinks/>
                  <li><a ref ="./SocialLinks"></a></li>
                </ul>
              </div>
            </nav>
        );
    }
}

export default Footer
