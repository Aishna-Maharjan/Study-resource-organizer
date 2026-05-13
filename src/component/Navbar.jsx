function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-area">
        <h2>Study Organizer</h2>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Subjects</li>
        <li>Resources</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className="nav-btn">
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;