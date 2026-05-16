import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  function scrollAndFocus(id, focusId) {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    if (focusId) {
      setTimeout(() => {
        document.getElementById(focusId)?.focus();
      }, 400);
    }
  }

  function goToSubjects() {
    if (location.pathname === "/") {
      scrollAndFocus("subjects");
    } else {
      navigate("/");
      setTimeout(() => scrollAndFocus("subjects"), 100);
    }
  }

  function goToGetStarted() {
    if (location.pathname === "/") {
      scrollAndFocus("hero", "subject-input");
    } else {
      navigate("/");
      setTimeout(() => scrollAndFocus("hero", "subject-input"), 100);
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

      <button onClick={goToGetStarted} className="nav-btn">
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;
