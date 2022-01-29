/* eslint-disable no-unused-vars */
import React, { Suspense, lazy, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Route, Routes, Outlet, useNavigate } from "react-router-dom"
import jwt from "jsonwebtoken"
import NavBar from "./components/layout/NavBar"
import { loggedInUser } from "./redux/actions/userActions"
import ChatWidget from "./components/sections/chat/ChatWidget"

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
      navigate("/login")
    } else {
      dispatch(loggedInUser())
    }
  }, [dispatch, token, loggedIn, navigate, currentTime])

  return (
    <div className="App">
      <NavBar />
      <ChatWidget />
      <Outlet />
    </div>
  )
}

export default App
