import React, { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"

const Home = lazy(() => import("./pages/Home"))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
