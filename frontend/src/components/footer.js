import "./styles.css";

export default function Footer() {
  return (
    <div className="flexbox-footer">
      <div className="box">
        <h2 className="footer-heading">VeteranMeet</h2>
      </div>
      <div className="box"></div>
      <div className="box">
        <h3>COMPANY</h3>
        <p className="footer-para">Fast NUCES</p>
        <p className="footer-para">Islamabad Traffic Police</p>
      </div>
      <div className="box">
        <h3>FEATURES</h3>
        <p className="footer-para">React</p>
        <p className="footer-para">Cascading Style Sheet</p>
        <p className="footer-para">HTML</p>
        <p className="footer-para">Web Development</p>
        <p className="footer-para">Frontend and Backend</p>
      </div>
      <div class="box">
        <h3>CONTACT US</h3>
        <p className="footer-para">03015146249</p>
        <p className="footer-para">i190529@nu.edu.pk</p>
        <p className="footer-para">03169030999</p>
        <p className="footer-para">i192175@nu.edu.pk</p>
      </div>
    </div>
  );
}
