import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  // subject
  function goToSubjects() {
    if (location.pathname === "/") {
      const section = document.getElementById("subjects");

      section?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById("subjects");

        section?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  }
// resources
  function goToResources() {
    if (location.pathname === "/") {
      const section = document.getElementById("resources");

      section?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById("resources");

        section?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  }

  return (
    <nav className="navbar">
      <div className="logo-area">
        <h2>Study Organizer</h2>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <span onClick={goToSubjects} className="nav-item">
            Subjects
          </span>
        </li>

        <li>
          <Link to="/resources">Resources</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <Link to="/get-started" className="nav-btn">
        Get Started
      </Link>
    </nav>
  );
}

export default Navbar;
