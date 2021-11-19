import React, { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Topics from "./pages/Topics"

const Home = lazy(() => import("./pages/Home"))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/topics" element={<Topics />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
