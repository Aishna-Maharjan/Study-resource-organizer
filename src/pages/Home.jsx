import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import SubjectGrid from "../component/SubjectGrid";
import Footer from "../component/Footer";

import "../styles/style.css";

function Home({ subjects, setSubjects }) {
  return (
    <div>
      <Navbar />

      <Hero subjects={subjects} setSubjects={setSubjects} />

      <div id="subjects">
        <SubjectGrid subjects={subjects} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
