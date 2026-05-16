import { useState } from "react";

function Hero({ subjects, setSubjects }) {
  const [subjectName, setSubjectName] = useState("");

  function addSubject() {
    if (!subjectName.trim()) return;

    const newSubject = {
      id: Date.now(),
      name: subjectName.trim(),
      resources: [],
    };

    setSubjects([...subjects, newSubject]);
    setSubjectName("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") addSubject();
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-text">
        <span className="hero-badge">✦ Your personal study space</span>
        <h1>Keep your study life in one place</h1>
        <p>
          Add subjects, drop in notes, links, PDFs and videos —
          all organized the way you think.
        </p>
        <div className="hero-input-row">
          <input
            id="subject-input"
            type="text"
            placeholder="What are you studying? e.g. Biology"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={addSubject}>+ Add</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
