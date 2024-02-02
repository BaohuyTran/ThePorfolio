import React from "react";
import "../styles/Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FacebookIcon />
        <InstagramIcon />
        <GitHubIcon />
      </div>
      <p>&copy; The project is following this tutorial: https://youtu.be/x7mwVn2z3Sk</p>
    </div>
  );
}

export default Footer;