import { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from './Footer';

function Resources({ subjects = [] }) {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");

  function handleSearch() {
    setSearch(searchInput);
  }

  const allResources = subjects.flatMap((s) =>
    (s.resources || []).map((r) => ({
      ...r,
      subject: s.name,
    })),
  );

  const filtered = allResources.filter((r) =>
    (r.name || "").toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="resource-page">
      <Navbar />

      <div className="resource-section">
        <h2>Resources</h2>

        <div style={{ marginBottom: "20px" }}>
          <input
            placeholder="Search resources..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="resource-search"
          />

          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>

        <div className="resource-list">
          {filtered.length === 0 ? (
            <p>No resources found</p>
          ) : (
            filtered.map((r) => (
              <div className="resource-card" key={r.id}>
                <h3>{r.name}</h3>
                <p>
                  <b>Subject:</b> {r.subject}
                </p>

                {r.fileUrl && (
                  <a
                    href={r.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="open-file"
                  >
                    Open File
                  </a>
                )}
              </div>
            ))
          )}
        </div>
      </div>
       <Footer/>
    </div>
  );
}

export default Resources;
