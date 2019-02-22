import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

class SocialLinks extends React.Component {
  render() {
    return (
      <div>
        <SocialIcon url="https://www.linkedin.com/in/lesterantoniocaballero/" />
        <SocialIcon url="https://www.facebook.com/lester.knight?ref=bookmarks" />
        <SocialIcon url="https://www.instagram.com/ouroboricform/" />
        <SocialIcon url="https://github.com/ouroboricforms" />
      </div>
  )
}
}

export default SocialLinks
