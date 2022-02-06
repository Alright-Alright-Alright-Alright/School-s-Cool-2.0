/* eslint-disable no-unused-vars */
import React, { Suspense, lazy, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Route, Routes, Outlet, useNavigate } from "react-router-dom"
import jwt from "jsonwebtoken"
import NavBar from "./components/layout/NavBar"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Topics from "./pages/Topics"
import TopicDetailPage from "./pages/TopicDetailPage"
import Home from "./pages/Home"
import { loggedInUser } from "./redux/actions/userActions"
// const Home = lazy(() => import("./pages/Home"))

function App() {
  const loggedIn = useSelector((state) => state.user.isLoggedIn)
  const token = localStorage.getItem("Authorization")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentTime = new Date().getTime().toString().slice(0, 10)

  useEffect(() => {
    if (
      jwt.decode(token?.slice(7, token.length))?.exp < Number(currentTime) ||
      (!loggedIn && !token)
    ) {
      localStorage.removeItem("Authorization")
      localStorage.removeItem("user")
      console.log("token expired!")
      navigate("/login")
    } else {
      dispatch(loggedInUser())
    }
  }, [dispatch, token, loggedIn, navigate, currentTime])

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
