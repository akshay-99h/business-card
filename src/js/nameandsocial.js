import React from "react";
import MailIcon from "../images/Icon.svg";
import LinkedInIcon from "../images/Icon/Font Awesome Free/Brands/L/Vector.svg";
import "../css/name.css";
import "../css/social.css";
import "../css/App.css";
import "../css/footer.css";
import "../css/photo.css";
import "../css/mainContent.css";
import "../css/paragraph.css";
import "../css/social.css";

export default function NameAndSocial() {
  return (
    <>
      <div className="name">
        <h1>Akshay Prabhat Mishra</h1>
        <h2>Frontend Developer</h2>
        <h3>akshay-99h.github.io</h3>
      </div>
      <div className="social">
        <a
          href="mailto:akshaypmishra02@gmail.com"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <button>
            <span>
              <img src={MailIcon} alt="Email" className="Mail" />{" "}
              <i className="MailText">Email</i>
            </span>
          </button>
        </a>
        <a
          href="https://linkedin.com/in/akshay-99h"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <button>
            <span>
              <img src={LinkedInIcon} alt="LinkedIn" className="LinkedIn" />{" "}
              <i className="LinkedInText">LinkedIn</i>
            </span>
          </button>
        </a>
      </div>
    </>
  );
}
