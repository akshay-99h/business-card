import React from "react";
import pic from "../images/Akshay Prabhat Mishra.jpeg";
import "../css/photo.css";
import "../css/App.css";
import "../css/footer.css";
import "../css/mainContent.css";
import "../css/name.css";
import "../css/paragraph.css";
import "../css/social.css";

export default function Photo() {
  return (
    <div className="photo">
      <img src={pic} alt={"Akshay Prabhat Mishra"} />
    </div>
  );
}
