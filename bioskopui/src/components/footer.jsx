import React, { Component } from 'react';
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
    FaEnvelope,
    FaLinkedin
} from 'react-icons/fa';


var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
  
    left: "0",
    bottom: "0",
    height: "10%",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Footer({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                { children }
                <div className="footer-copyright text-center py-3">© 2019 Copyright:
        <a href="localhost:3000"> ANDREW JOY TAMBUN</a>
            </div>
        </div>
       
      </div>
    )
}

export default Footer;

