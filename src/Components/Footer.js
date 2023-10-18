import React from 'react';
import githubicon from "../Images/github.png";
import linkedinicon from "../Images/linkedin.png";
import emailicon from "../Images/email.png"
import instaicon from "../Images/instagram.png"

import DropdownMenu from './DropdownBtn';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href="https://github.com">
          <img src={githubicon} alt="GitHub" />
        </a>

        <a href="https://linkedin.com">
          <img src={linkedinicon} alt="LinkedIn" />
        </a>

        <a href="mailto:subhadeephazra68@gmail.com">
          <img src={emailicon} alt="Mail" />
        </a>

        <a href="https://example.com">
          <img src={instaicon} alt="Instagram" />
        </a>
      </div>

      <DropdownMenu/>

   </div>
  )
}

export default Footer