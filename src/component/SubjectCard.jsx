import { useNavigate } from "react-router-dom";

const iconColors = [
  { bg: "#FDE8DA", emoji: "📐" },
  { bg: "#E8F4FD", emoji: "🧬" },
  { bg: "#F0EDFD", emoji: "📖" },
  { bg: "#E8FDF0", emoji: "🔬" },
  { bg: "#FDF5E8", emoji: "🎨" },
  { bg: "#FDE8F0", emoji: "🎵" },
  { bg: "#E8F0FD", emoji: "💻" },
  { bg: "#F5FDE8", emoji: "🌍" },
];

function SubjectCard({ id, name, resourceCount = 0, index = 0 }) {
  const navigate = useNavigate();
  const icon = iconColors[index % iconColors.length];

  return (
    <div className="subject-card">
      <div className="subject-card-icon" style={{ background: icon.bg }}>
        {icon.emoji}
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
