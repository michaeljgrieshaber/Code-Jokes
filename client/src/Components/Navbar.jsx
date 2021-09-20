import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/Create">Create</Link>
        <Link to="/Rules">Rules</Link>
      </header>
    </div>
  );
}
