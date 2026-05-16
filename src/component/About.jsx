import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import folder from "../assests/folder.png";
import save from "../assests/save.png";
import star from "../assests/star.png";
import bar from "../assests/bar-graph.png";
import clock from "../assests/clock.png";
import search from "../assests/search.png";

function About() {
  return (
    <div>
      <Navbar />

      <section className="about">
        <div className="about-hero">
          <h1>About Study Organizer</h1>
          <p>
            A focused space for students and self-learners to bring all their
            study materials together — no clutter, no chaos.
          </p>
        </div>

        <div className="about-body">
          <p>
            Study Organizer was built around a simple idea: when your materials
            are scattered across browser tabs, folders, and notebooks, learning
            gets harder. This app gives you one clean place to collect
            everything — notes, PDFs, links, videos — organized exactly the way
            you think.
          </p>

          <p>
            Whether you're preparing for exams, working through an online
            course, or just trying to keep your research in order, Study
            Organizer adapts to how you study, not the other way around.
          </p>

          <h2 className="about-section-title">What you can do</h2>

          <div className="about-features">
            <div className="feature-card">
              <div className="feature-card-icon">
                <img
                  src={folder}
                  style={{
                    width: "24px",
                    height: "24px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <h3>Organize by subject</h3>
              <p>
                Create subjects for anything you're learning and keep every
                resource neatly grouped under it.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon">
                <img
                  src={save}
                  style={{
                    width: "24px",
                    height: "24px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <h3>Save any resource type</h3>
              <p>
                PDFs, links, Word docs, notes, and videos — add them all in one
                place with a consistent format.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon">
                <img
                  src={star}
                  style={{
                    width: "24px",
                    height: "24px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <h3>Favorites</h3>
              <p>
                Mark your most important materials so they're always one click
                away when you need them most.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon">
                <img
                  src={bar}
                  style={{
                    width: "24px",
                    height: "24px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <h3>Track your progress</h3>
              <p>
                See how many resources you've gathered per subject with a live
                overview on your home dashboard.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon">
                <img
                  src={clock}
                  style={{
                    width: "24px",
                    height: "24px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <h3>Recently added</h3>
              <p>
                Pick up right where you left off — your most recent resources
                are always surfaced at the top.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon">
                <img
                  src={search}
                  style={{
                    width: "24px",
                    height: "24px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <h3>Search resources</h3>
              <p>
                Find any resource across all your subjects instantly using the
                global resource search.
              </p>
            </div>
          </div>

          <div className="about-mission">
            <p>
              "Good studying isn't about having more — it's about having the
              right things, exactly when you need them."
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
