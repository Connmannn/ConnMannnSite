import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import "./Footer.css"

/*IE11 does not support rel="noopener noreferrer" at this time..
  LinkedIn and Facebook protect against "tabnabbing". 
  Do something if referring out to other platforms.
https://sites.google.com/site/bughunteruniversity/nonvuln/phishing-with-window-opener */


export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__icons">
        <a href="https://www.linkedin.com/in/matthew-connaughton-980589139/" target="_blank" rel="noopener noreferrer" className="footer__icons--linkedin">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.facebook.com/matthew.connaughton.5" target="_blank" rel="noopener noreferrer" className="footer__icons--facebook">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="mailto:matthew.t.connaughton@gmail.com" className="footer__icons--email">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
      <div className="footer__text">
      <a href="mailto:matthew.t.connaughton@gmail.com">matthew.t.connaughton@gmail.com </a>
      </div>
    </div>
  );
}