import "./styles.css";
import App1 from "./App1";
import TopSection from "./top-section";
import SecondSection from "./scnd-section";
import ThirdSection from "./third-section";
import FourthSection from "./fourth-section";
import FifthSection from "./fifth-section";
import Footer from "./footer";

export default function Homepage() {
  return (
    <div>
    <App1 />
    <TopSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <FifthSection />
    <Footer />
  </div>
  );
}
