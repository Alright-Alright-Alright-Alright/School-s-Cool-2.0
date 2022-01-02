/* eslint-disable no-unused-vars */
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import { Provider } from "react-redux"
import App from "./App"
// import Topics from "./routes/topics"
import store from "./redux/store"
import Home from "./pages/Home"
// import TopicIndex from "./pages/TopicOverview"
import TopicDetailPage from "./pages/TopicDetailPage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Topics from "./pages/Topics"
import Library from "./pages/Library"
import Courses from "./pages/Courses"
import Events from "./pages/Events"
import CourseDetailPage from "./pages/CourseDetailPage"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="topics" element={<Topics />} />
          <Route path="topics/:topicId" element={<TopicDetailPage />} />
          <Route path="/library" element={<Library />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetailPage />} />
          <Route path="/events" element={<Events />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
