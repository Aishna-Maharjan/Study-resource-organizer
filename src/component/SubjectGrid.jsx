import SubjectCard from "./SubjectCard";

function SubjectGrid({ subjects = [] }) {
  return (
    <div className="subject-grid" id="subjects">
      <div className="subject-grid-header">
        <span className="subject-grid-label">Your subjects</span>
        <div className="subject-divider"></div>
      </div>

      <div className="grid">
        {subjects.map((item) => (
          <SubjectCard
            key={item.id}
            id={item.id}
            name={item.name}
            resourceCount={item.resources?.length || 0}
          />
        ))}

        <div className="subject-card-empty">
          <span>+</span>
          <p>Add a subject above</p>
        </div>
      </div>
    </div>
  );
}

export default SubjectGrid;
