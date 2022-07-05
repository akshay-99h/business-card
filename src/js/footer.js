import React from "react";
import TwitterImg from "../images/Twitter Icon.svg";
import FacebookImg from "../images/Facebook Icon.svg";
import InstagramImg from "../images/Instagram Icon.svg";
import GitHubImg from "../images/GitHub Icon.svg";
import "../css/footer.css";
import "../css/App.css";
import "../css/photo.css";
import "../css/mainContent.css";
import "../css/name.css";
import "../css/paragraph.css";
import "../css/social.css";

export default function Footer() {
  return (
    <footer className="iconBg">
      <a
        href="http://twitter.com/akshay_99h"
        target={"_blank"}
        rel={"noreferrer"}
      >
        <img
          src={TwitterImg}
          alt="Twitter Icon"
          srcset=""
          className="twitterIcon"
        />
      </a>

      <a
        href="http://facebook.com/akshay.prabhat.mishra"
        target={"_blank"}
        rel={"noreferrer"}
      >
        <img
          src={FacebookImg}
          alt="Facebook Icon"
          srcset=""
          className="facebookIcon"
        />
      </a>

      <a
        href="http://instagram.com/akshay_99h"
        target={"_blank"}
        rel={"noreferrer"}
      >
        <img
          src={InstagramImg}
          alt="Instagram Icon"
          srcset=""
          className="instagramIcon"
        />
      </a>

      <a
        href="http://github.com/akshay-99h"
        target={"_blank"}
        rel={"noreferrer"}
      >
        <img
          src={GitHubImg}
          alt="GitHub Icon"
          srcset=""
          className="githubIcon"
        />
      </a>
    </footer>
  );
}
