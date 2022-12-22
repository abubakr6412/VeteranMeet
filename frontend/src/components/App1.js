import "./styles.css";
//Simple CSS by AbuBakr
export default function App1() {
  return (
    <nav class="nav">
      <a href="#" class="title">
        VeteranMeet
      </a>
      <ul class="active">
        <li class="items">
          <a href="#" class="nav-Links">
            Home
          </a>
        </li>
        <li class="items">
          <a href="#" class="nav-Links">
            About
          </a>
        </li>
        <li class="items">
          <a href="#" class="nav-Links">
            Portfolio
          </a>
        </li>
        <li class="items">
          <a href="#" class="nav-Links">
            Skills
          </a>
        </li>
        <li class="items">
          <button onClick={
            function(){
                window.location.href = "http://localhost:3000/login";
                }
          } class="LogIn-btn">LogIn</button>
        </li>
      </ul>
    </nav>
  );
}
