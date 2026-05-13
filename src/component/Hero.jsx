import { useState } from "react";

function Hero({ subjects, setSubjects }) {
  const [subjectName, setSubjectName] = useState("");

 function addSubject() {
  if (!subjectName.trim()) return;

  const newSubject = {
    id: Date.now(),
    name: subjectName.trim(),
    resources: []
  };

  setSubjects([...subjects, newSubject]);
  setSubjectName("");
}

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Hub for all things academia</h1>

        <p>
          <b>Simple Studies</b> has hundreds of free resources to help you succeed in school.
        </p>

        <input
          type="text"
          placeholder="Enter subject..."
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
        />

        <button onClick={addSubject}>
          Add Subject
        </button>
      </div>
    </section>
  );
}

export default Hero;