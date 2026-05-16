import { useNavigate } from "react-router-dom";

function SubjectCard({ id, name, resourceCount = 0 }) {
  const navigate = useNavigate();

  return (
    <div className="subject-card">
      <div className="subject-card-initial">
        {name.charAt(0).toUpperCase()}
      </div>
      <h3>{name}</h3>
      <p>{resourceCount} resource{resourceCount !== 1 ? "s" : ""}</p>
      <button onClick={() => navigate(`/subject/${id}`)}>
        View guides →
      </button>
    </div>
  );
}

export default SubjectCard;
