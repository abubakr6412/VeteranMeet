import "./styles.css";

export default function FifthSection() {
  return (
    <div class="Fifth-Section">
      <hr />
      <h1 class="login-heading">LogIn Now</h1>
      <input
        class="input"
        type="text"
        id="email"
        name="email"
        placeholder="email"
      />
      <br />
      <br />
      <input
        class="input"
        type="password"
        id="psw"
        name="psw"
        placeholder="password"
      />
      <br />
      <br />
      <button class="login-btn">LogIn</button>
    </div>
  );
}
