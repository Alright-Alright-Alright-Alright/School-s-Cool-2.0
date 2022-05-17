/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import jwt from "jsonwebtoken"
import { ErrorBoundary } from "react-error-boundary"
import { useTranslation } from "react-i18next"
import i18next from "i18next"
import NavBar from "./components/layout/NavBar"
import { loggedInUser, logoutUser } from "./redux/actions/userActions"
import ChatWidgetNew from "./components/sections/chat/ChatWidgetNew"
import ErrorFallback from "./components/core/errorBoundries/ErrorFallback"

const languages = [
  {
    code: "nl",
    name: "Nederlands",
    country_code: "nl",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
]

function App() {
  const loggedIn = useSelector((state) => state.user.isLoggedIn)
  const [showChatWidget, setShowChatWidget] = useState(false)
  const token = localStorage.getItem("Authorization")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const currentTime = (new Date().getTime() / 1000).toString()
  const now = parseInt(currentTime.split(".")[0], 10)

  useEffect(() => {
    if (!token || jwt.decode(token.replace("Bearer ", ""))?.exp < now) {
      dispatch(logoutUser())
      console.info("token expired!")
      navigate("/login")
    } else {
      dispatch(loggedInUser())
    }
    setTimeout(() => {
      setShowChatWidget(true)
    }, 3000)
  }, [dispatch, token, loggedIn, navigate, currentTime, now])

  const errorHandler = (error, errorInfo) => {
    console.error("Logging", error, errorInfo)
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
