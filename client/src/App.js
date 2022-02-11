/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { Suspense, lazy, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Route, Routes, Outlet, useNavigate } from "react-router-dom"
import jwt from "jsonwebtoken"
import {
  StreamApp,
  StatusUpdateForm,
  FlatFeed,
  NotificationDropdown,
  Activity,
  ActivityFooter,
  LikeButton,
  CommentField,
  CommentList,
  CommentItem,
  InfiniteScrollPaginator,
} from "react-activity-feed"
import { connect } from "getstream"
import NavBar from "./components/layout/NavBar"
import { loggedInUser, logoutUser } from "./redux/actions/userActions"
import ChatWidget from "./components/sections/chat/ChatWidget"
import ChatIndex from "./components/sections/chat/ChatIndex"
import ChatWidgetNew from "./components/sections/chat/ChatWidgetNew"
import "react-activity-feed/dist/index.css"

function App() {
  const loggedIn = useSelector((state) => state.user.isLoggedIn)
  const user = useSelector((state) => state.user.singleUser)
  // const streamToken = useSelector((state) => state.activities.streamToken)

  const [showChatWidget, setShowChatWidget] = useState(false)
  const [streamToken, setStreamToken] = useState("")
  const token = localStorage.getItem("Authorization")
  // const streamToken = localStorage.getItem("StreamToken")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentTime = new Date().getTime().toString().slice(0, 10)

  // // get key and secret
  // const app_key = process.env.REACT_APP_STREAM_API_KEY
  // const secret = process.env.REACT_APP_STREAM_API_SECRET
  // const appId = process.env.REACT_APP_STREAM_APP_ID
  // const userId = user?._id
  // console.log(userId)

  // useEffect(() => {
  //   const initStream = async () => {
  //     const serverClient = connect(app_key, secret)

  //     const userToken = serverClient.createUserToken(user?._id)
  //     // console.log(userToken)

  //     setStreamToken(userToken)

  //     // const userClient = connect(app_key, userToken, appId)
  //     // const feed = userClient.feed("user", user?._id)
  //   }

  //   initStream()
  // }, [])

  // console.log(streamToken)

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

  return (
    <div className="App">
      {/* <StreamApp apiKey={app_key} appId={appId} token={streamToken}>
        {" "}
        <FlatFeed feedGroup="user" notify /> */}
      <NavBar />
      <ChatWidgetNew />
      {/* <ChatIndex /> */}
      {/* {showChatWidget && <ChatWidget />} */}
      {/* <ChatWidget /> */}
      <Outlet />
      {/* </StreamApp> */}
    </div>
  )
}

export default App
