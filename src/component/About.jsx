import Navbar from "../component/Navbar"

function About() {

  return (

    <div>

      <Navbar />

      <section className="about">

        <h1>About Study Resource Organizer</h1>

        <p>
          Study Resource Organizer is a web application
          designed to help students manage and organize
          their study materials in one place.
        </p>

        <p>
          Users can create subjects, store learning
          resources, and keep track of important study
          materials easily.
        </p>

        <div className="about-features">

          <div className="feature-card">
            <h3>Organize Subjects</h3>

            <p>
              Create and manage subjects dynamically.
            </p>
          </div>

          <div className="feature-card">
            <h3>Easy Access</h3>

            <p>
              Quickly find resources for each subject.
            </p>
          </div>

          <div className="feature-card">
            <h3>Favorites</h3>

            <p>
              Save important resources for later.
            </p>
          </div>

        </div>

      </section>

    </div>
  )
}

export default About