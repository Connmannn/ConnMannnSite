import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import "./SocialFollow.css"

export default function SocialFollow() {
  return (
    <div className="social-follow">
      <a href="https://www.linkedin.com/in/matthew-connaughton-980589139/" target="_blank" className="social-follow__LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://www.facebook.com/matthew.connaughton.5" target="_blank" className="social-follow__Facebook">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="mailto:matthew.t.connaughton@gmail.com" className="social-follow__Email">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
    </div>
  );
}