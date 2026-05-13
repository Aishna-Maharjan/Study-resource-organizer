import { useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import AddResource from "../component/AddResource";

function SubjectPage({ subjects, setSubjects }) {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [activeView, setActiveView] = useState("dashboard");

  const subject = subjects.find((s) => s.id.toString() === id);

  if (!subject) {
    return (
      <div>
        <Navbar />
        <main className="not-found-page">
          <h1>Subject not found</h1>
        </main>
        <Footer />
      </div>
    );
  }
  const resources = subject.resources || [];

  const totalResources = resources.length;

  const recentResources = [...resources]
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 5);

  const favoriteResources = resources.filter((r) => r.favorite);

  return (
    <div className="subject-page-wrapper">
      <Navbar />

      <section className="subject-hero">
        <div>
          <p className="subject-label">YOUR SUBJECT</p>
          <h1>{subject.name}</h1>
          <p>
            Organize your study resources, notes, and guides all in one place.
          </p>
        </div>
      </section>

      <section className="subject-dashboard">
        <div className="dashboard-card">
          <div>
            <h2>Total Resources</h2>
            <p>{totalResources} resource(s) saved</p>
          </div>
          <span>→</span>
        </div>

        <div
          className="dashboard-card"
          onClick={() => setActiveView("recent")}
          style={{ cursor: "pointer" }}
        >
          <div>
            <h2>Recently Added</h2>
            
            <p>{recentResources.length} recent resource(s)</p>
          </div>
          <span>→</span>
          
        </div>

        <div className="dashboard-card">
          <div>
            <h2>Favorites</h2>
            <p>{favoriteResources.length} favorite resource(s)</p>
          </div>
          <span>→</span>
        </div>

        <div className="dashboard-card add-resource-card">
          <div>
            <h2>Add Resources</h2>
            <p>Upload PDFs, notes, links, and study guides</p>
          </div>

          <button onClick={() => setShowModal(true)}>Add</button>
        </div>
      </section>

      {activeView === "recent" && (
        <button
          className="back-button"
          onClick={() => setActiveView("dashboard")}
        >
          ← Back
        </button>
      )}
      {activeView === "recent" && (
        <section className="resource-section">
          <h2>Recently Added Resources</h2>

          {recentResources.length === 0 ? (
            <p>No resources added yet.</p>
          ) : (
            <div className="resource-list">
              {recentResources.map((resource) => (
                <div key={resource.id} className="resource-card">
                  <h3>{resource.title}</h3>
                  <p>
                    <strong>Type:</strong> {resource.type}
                  </p>
                  <p>{resource.content}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {showModal && (
        <AddResource
          subject={subject}
          subjects={subjects}
          setSubjects={setSubjects}
          onClose={() => setShowModal(false)}
        />
      )}

      <Footer />
    </div>
  );
}

export default SubjectPage;
