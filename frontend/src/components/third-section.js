import "./styles.css";
import callImg from "./images/caller.png";

export default function ThirdSection() {
  return (
    <div class="Third-Section">
      <hr />
      <h1 class="secnd-heading">Instant Conference Calls</h1>
      <div class="paraghaph">
        <p class="third-paragraph">
          Feeling bored and not missing someone. Why wait call them now and chat
          with them. See what they are doing and be creative together.{" "}
        </p>
      </div>
      <button class="learn-btn">Chat Now</button>
      <br />
      <img class="third-img" src={callImg} />
    </div>
  );
}
