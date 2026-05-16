import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import SubjectGrid from "../component/SubjectGrid";
import Footer from "../component/Footer";

import "../styles/style.css";

function Home({ subjects, setSubjects }) {
  const totalResources = subjects.reduce(
    (sum, s) => sum + (s.resources?.length || 0), 0
  );
  const totalFavorites = subjects.reduce(
    (sum, s) => sum + (s.resources?.filter((r) => r.favorite).length || 0), 0
  );

  const maxCount = Math.max(...subjects.map((s) => s.resources?.length || 0), 1);

  return (
    <div>
      <Navbar />
      <Hero subjects={subjects} setSubjects={setSubjects} />

      {/* Stats & Chart */}
      <section className="stats-section">
        <div className="stats-header">
          <span className="stats-label">Overview</span>
          <div className="stats-divider"></div>
        </div>

        <div className="stats-cards">
          <div className="stat-card">
            <div className="stat-number">{subjects.length}</div>
            <div className="stat-label">Subjects</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{totalResources}</div>
            <div className="stat-label">Total Resources</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{totalFavorites}</div>
            <div className="stat-label">Favorites</div>
          </div>
        </div>

        <div className="chart-area">
          <h3>Resources per subject</h3>
          {subjects.length === 0 ? (
            <div className="chart-empty">
              <span>📊</span>
              <p>Add subjects to see your progress chart</p>
            </div>
          ) : (
            <div className="chart-bars">
              {subjects.map((s) => {
                const count = s.resources?.length || 0;
                const heightPct = Math.max((count / maxCount) * 100, 4);
                return (
                  <div className="chart-bar-col" key={s.id}>
                    <span className="chart-bar-count">{count}</span>
                    <div
                      className="chart-bar"
                      style={{ height: `${heightPct}%` }}
                      title={`${s.name}: ${count} resource(s)`}
                    />
                    <span className="chart-bar-name">{s.name}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <div id="subjects">
        <SubjectGrid subjects={subjects} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
