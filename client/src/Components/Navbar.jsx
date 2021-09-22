import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navTitle">Vote-a-Joke</div>
      <br />
      <div className="navLinks">
        <Link to="/">Jokes Home</Link>
        <br />
        <Link to="/Create">Add your jokes</Link>
        <br />
        <Link to="/Rules">Rules</Link>
      </div>
    </div>
  );
}
