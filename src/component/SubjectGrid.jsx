import subjects from "../data/subject.js"
import SubjectCard from "./SubjectCard"

function SubjectGrid() {

  return (
    <section className="subject-grid">

      <h2>Simple Studies</h2>

      <div className="grid">

        {subjects.map((item) => (

          <SubjectCard
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
          />

        ))}

      </div>

    </section>
  )
}

export default SubjectGrid