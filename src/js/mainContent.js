import NameAndSocial from "./nameandsocial";
import Paragraph from "./paragraph";
import "../css/mainContent.css";
import "../css/App.css";
import "../css/footer.css";
import "../css/photo.css";
import "../css/name.css";
import "../css/paragraph.css";
import "../css/social.css";

export default function MainContent() {
  return (
    <div className="mainContent">
      <NameAndSocial />
      <Paragraph />
    </div>
  );
}
