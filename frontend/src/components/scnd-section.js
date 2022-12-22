import "./styles.css";
import friendImg from "./images/friends.png";

export default function SecondSection() {
  return (
    <div class="Second-Section">
      <h1 class="secnd-heading">Meet New People</h1>
      <img class="friends-img" src={friendImg} alt="addfrnd-photo" />
    </div>
  );
}
