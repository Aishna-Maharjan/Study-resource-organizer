import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import SubjectPage from "./pages/SubjectPage"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/subject/:id"
          element={<SubjectPage />}
        />

      </Routes>

    </BrowserRouter>

  )
}

export default App