import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import TopSection from "./top-section";
import SecondSection from "./scnd-section";
import ThirdSection from "./third-section";
import FourthSection from "./fourth-section";
import FifthSection from "./fifth-section";
import Footer from "./footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <TopSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <FifthSection />
    <Footer />
  </StrictMode>
);
