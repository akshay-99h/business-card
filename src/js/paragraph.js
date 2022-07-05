import React from "react";
import "../css/paragraph.css";
import "../css/App.css";
import "../css/footer.css";
import "../css/photo.css";
import "../css/mainContent.css";
import "../css/name.css";
import "../css/social.css";

export default function Paragraph() {
  return (
    <>
      <h2 className="about">About</h2>
      <p>
        I am a Frontend Developer with a passion for creating beautiful and
        functional web applications. I have a strong background in web
        development and have worked on a wide range of projects.
      </p>
      <h2 className="interests">Interests</h2>
      <p>
        I am a fan of the following technologies:
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>MySQL</li>
          <li>Git</li>
          <li>GitHub</li>
        </ul>
      </p>
    </>
  );
}
