import "./styles.css";
import headerImg from "./images/header.png";

export default function TopSection() {
  return (
    <div className="Top-Section">
      <div className="Heading-Section">
        <h1 className="heading">
          <span class="veteran">VeteranMeet</span> A Smart Connection Tool
        </h1>
        <p className="section-paragraph">
          VeteranMeet is a web based solution to connect with your loved ones
          and know people around the world. It is a community service based on
          th interest veterans.
        </p>
        <div className="button-section">
          <button className="top-btn">Get Started</button>
          <button className="top-scnd-btn">Contact Us</button>
        </div>
      </div>
      <div class="Image-block">
        <img class="header-img" src={headerImg}></img>
      </div>
    </div>
  );
}
