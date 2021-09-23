import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navTitle">Vote-a-Joke</div>
      <br />
      <div className="navLinks">
        <Link to="/" className="linkHome">
          Home
        </Link>
        <br />
        <Link to="/Create" className="linkCreate">
          Add jokes
        </Link>
        <br />
        <Link to="/Rules" className="linkRules">
          Rules
        </Link>
      </div>
    </div>
  );
}
