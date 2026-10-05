import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ padding: "15px", background: "#333" }}>
      <Link
        to="/"
        style={{ color: "white", marginRight: "20px" }}
      >
        Home
      </Link>

      <Link
        to="/projects"
        style={{ color: "white", marginRight: "20px" }}
      >
        Projects
      </Link>

      <Link
        to="/contact"
        style={{ color: "white" }}
      >
        Contact
      </Link>
    </nav>
  );
}

export default NavBar;