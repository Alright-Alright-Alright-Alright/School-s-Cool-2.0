/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from "react"
import { Route, Routes, Outlet } from "react-router-dom"
import NavBar from "./components/layout/NavBar"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Topics from "./pages/Topics"
import TopicDetailPage from "./pages/TopicDetailPage"
import Home from "./pages/Home"


// const Home = lazy(() => import("./pages/Home"))

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Home /> */}
      <Outlet />
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/topics" element={<Topics />}>
            <Route path=":topicId" element={<TopicDetailPage />} />
          </Route>
        </Routes>
      </Suspense> */}
    </div>
  )
}

export default App
