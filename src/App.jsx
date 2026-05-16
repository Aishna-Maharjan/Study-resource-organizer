import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SubjectPage from "./pages/SubjectPage";
import Resources from "./component/Resources";
import About from "./component/About";
import Contact from "./component/Contact";  
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [subjects, setSubjects] = useState([]);
  const [resources, setResources] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              subjects={subjects}
              setSubjects={setSubjects}
              resources={resources}
              setResources={setResources}
            />
          }
        />

        <Route
          path="/subject/:id"
          element={
            <SubjectPage subjects={subjects} setSubjects={setSubjects} />
          }
        />

        <Route
          path="/resources"
          element={<Resources subjects={subjects} />}
        />

         <Route path="/about" element={<About />} />

         <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
