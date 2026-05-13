import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SubjectPage from "./pages/SubjectPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [subjects, setSubjects] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home subjects={subjects} setSubjects={setSubjects} />}
        />

        <Route
          path="/subject/:id"
          element={
            <SubjectPage subjects={subjects} setSubjects={setSubjects} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
