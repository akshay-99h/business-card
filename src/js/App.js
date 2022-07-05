import React from "react";
import Footer from "./footer";
import Photo from "./photo";
import MainContent from "./mainContent";
import "../css/App.css";
import "../css/footer.css";
import "../css/photo.css";
import "../css/mainContent.css";
import "../css/name.css";
import "../css/paragraph.css";
import "../css/social.css";

export default function App() {
  return (
    <div className="App">
      <Photo />
      <MainContent />
      <Footer />
    </div>
  );
}
