// import { useState } from "react"

import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import SubjectGrid from "../component/SubjectGrid";
import Footer from "../component/Footer";

import "../styles/style.css";

function Home({ subjects, setSubjects }) {
  return (
    <div>
      <Navbar />

      <Hero
        subjects={subjects}
        setSubjects={setSubjects}
      />

      <SubjectGrid subjects={subjects} />

      <Footer />
    </div>
  );
}

export default Home;