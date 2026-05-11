import { useParams } from "react-router-dom"

function SubjectPage() {

  const { id } = useParams()

  return (
    <div>
      Subject Page {id}
    </div>
  )
}

export default SubjectPage