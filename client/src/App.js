/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import jwt from "jsonwebtoken"
import { ErrorBoundary } from "react-error-boundary"
import NavBar from "./components/layout/NavBar"
import { loggedInUser, logoutUser } from "./redux/actions/userActions"
import ChatWidgetNew from "./components/sections/chat/ChatWidgetNew"
import ErrorFallback from "./components/core/errorBoundries/ErrorFallback"

function App() {
  const loggedIn = useSelector((state) => state.user.isLoggedIn)
  const [showChatWidget, setShowChatWidget] = useState(false)
  const token = JSON.parse(localStorage.getItem("Authorization"))
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentTime = new Date().getTime().toString().slice(0, 10)

  useEffect(() => {
    if (
      jwt.decode(token?.slice(7, token.length))?.exp < Number(currentTime) ||
      (!loggedIn && !token)
    ) {
      dispatch(logoutUser())
      console.log("token expired!")
      navigate("/login")
    } else {
      dispatch(loggedInUser())
    }
    setTimeout(() => {
      setShowChatWidget(true)
    }, 3000)
  }, [dispatch, token, loggedIn, navigate, currentTime])

  const errorHandler = (error, errorInfo) => {
    console.log("Logging", error, errorInfo)
  }

  return (
    <div className="App">
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={errorHandler}
        onReset={() => {
          navigate("/home")
        }}
      >
        <NavBar />
        <ChatWidgetNew />
        <Outlet />
      </ErrorBoundary>
    </div>
  )
}

export default App
