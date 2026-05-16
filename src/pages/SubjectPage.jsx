import { useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import AddResource from "../component/AddResource";

import notfav from "../assests/notfav.png";
import fav from "../assests/fav.png";

function SubjectPage({ subjects, setSubjects }) {
  const { id } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [activeView, setActiveView] = useState("dashboard");
  const [filterType, setFilterType] = useState("ALL");

  const subject = subjects.find((s) => s.id.toString() === id);

  if (!subject) {
    return (
      <div>
        <Navbar />
        <h1>Subject not found</h1>
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
  const filteredResources =
    filterType === "ALL"
      ? resources
      : resources.filter((r) => r.type === filterType);

  function toggleFavorite(resourceId) {
    const updatedSubjects = subjects.map((s) => {
      if (s.id.toString() !== id) return s;
      return {
        ...s,
        resources: s.resources.map((r) =>
          r.id === resourceId ? { ...r, favorite: !r.favorite } : r,
        ),
      };
    });
    setSubjects(updatedSubjects);
  }

  function ResourceCard({ r }) {
    return (
      <div key={r.id} className="resource-card">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3>{r.title}</h3>
          <button
            onClick={() => toggleFavorite(r.id)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
            title={r.favorite ? "Remove from favorites" : "Add to favorites"}
          >
            <img
              src={r.favorite ? fav : notfav}
              alt={r.favorite ? "Favorite" : "Not Favorite"}
              style={{ width: "24px", height: "24px", objectFit: "contain" }}
            />
          </button>
        </div>
        <p>{r.type}</p>
        {r.type === "PDF" ? (
          <a href={r.fileUrl} target="_blank" rel="noopener noreferrer">
            Open PDF
          </a>
        ) : (
          <p>{r.content}</p>
        )}
      </div>
    );
  }

  return (
    <div className="subject-page-wrapper">
      <Navbar />

      <section className="subject-hero">
        <h1>{subject.name}</h1>
        <p>Organize your study resources in one place</p>
      </section>

      <section className="subject-dashboard">
        <div
          className="dashboard-card"
          onClick={() => {
            setActiveView("filtered");
            setFilterType("ALL");
          }}
          style={{ cursor: "pointer" }}
        >
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

        <div
          className="dashboard-card"
          onClick={() => setActiveView("favorites")}
          style={{ cursor: "pointer" }}
        >
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
        <section className="resource-section">
          <button
            className="back-button"
            onClick={() => setActiveView("dashboard")}
          >
            ← Back
          </button>
          <h2>Recently Added</h2>
          {recentResources.length === 0 ? (
            <p>No resources yet</p>
          ) : (
            recentResources.map((r) => <ResourceCard key={r.id} r={r} />)
          )}
        </section>
      )}

      {activeView === "filtered" && (
        <section className="resource-section">
          <button
            className="back-button"
            onClick={() => setActiveView("dashboard")}
          >
            ← Back
          </button>
          <h2>All Resources</h2>
          <div className="filter-buttons">
            {["ALL", "PDF", "Link", "DOC", "Notes", "Video"].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={filterType === type ? "active" : ""}
              >
                {type}
              </button>
            ))}
          </div>
          {filteredResources.length === 0 ? (
            <p>No resources found</p>
          ) : (
            filteredResources.map((r) => <ResourceCard key={r.id} r={r} />)
          )}
        </section>
      )}

      {activeView === "favorites" && (
        <section className="resource-section">
          <button
            className="back-button"
            onClick={() => setActiveView("dashboard")}
          >
            ← Back
          </button>
          <h2>Favorites</h2>
          {favoriteResources.length === 0 ? (
            <p>
              No favorites yet — click the ☆ on any resource to save it here.
            </p>
          ) : (
            favoriteResources.map((r) => <ResourceCard key={r.id} r={r} />)
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
