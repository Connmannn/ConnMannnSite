import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGoogle,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

import "./SocialFollow.css"

export default function SocialFollow() {
  return (
    <div className="social-follow">
      {/* <a href="https://www.https://github.com/Connmannn" target="_blank" className="social-follow__Github">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a> */}
      <a href="https://www.linkedin.com/in/matthew-connaughton-980589139/" target="_blank" className="social-follow__LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://www.facebook.com/matthew.connaughton.5" target="_blank" className="social-follow__Facebook">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="mailto:matthew.t.connaughton@gmail.com" className="social-follow__Google">
        <FontAwesomeIcon icon={faGoogle} size="2x" />
      </a>
    </div>
  );
}