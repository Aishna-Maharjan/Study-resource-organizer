import { useNavigate } from "react-router-dom";

function SubjectCard({ id, name }) {
  const navigate = useNavigate();

  function handleViewGuides() {
    navigate(`/subject/${id}`);
  }

  return (
    <div className="subject-card">
      <h3>{name}</h3>
      <p>Click below to explore guides</p>

      <button onClick={handleViewGuides}>
        View All Guides
      </button>
    </div>
  );
}

export default SubjectCard;