import SubjectCard from "./SubjectCard";

function SubjectGrid({ subjects = [] }) {
  return (
    <div className="subject-grid">
      <h2>Your Subjects</h2>

      <div className="grid">
        {subjects.map((item) => (
          <SubjectCard
            key={item.id}
            id={item.id}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
}

export default SubjectGrid;