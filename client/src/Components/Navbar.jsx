import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <br />
        <Link to="/Create">Create</Link>
        <br />
        <Link to="/Rules">Rules</Link>
      </header>
    </div>
  );
}
