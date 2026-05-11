import { Link } from "react-router-dom"

function SubjectCard({ id, name, description }) {

  return (
    <div className="subject-card">

      <h3>{name}</h3>

      <p>{description}</p>

      <Link to={`/subject/${id}`}>
        <button>View Guides</button>
      </Link>

    </div>
  )
}

export default SubjectCard