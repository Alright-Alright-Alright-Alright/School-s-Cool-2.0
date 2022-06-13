/* eslint-disable no-unused-vars */
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import Loader from "./components/core/Loader";

import App from "./App";
// import Topics from "./routes/topics"
import store from "./redux/store";
import Home from "./pages/Home";
// import TopicIndex from "./pages/TopicOverview"
import TopicDetailPage from "./pages/TopicDetailPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Topics from "./pages/Topics";
import Library from "./pages/Library";
import Courses from "./pages/courses";
import Events from "./pages/Events";
import Course from "./pages/course";
import Lesson from "./pages/lesson";
import EventDetailsPage from "./pages/EventDetailsPage";
import ScrollToTop from "./hooks/ScrollToTop";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import NewPassword from "./pages/NewPassword";
import ForgotPassword from "./pages/ForgotPassword";
import AdminPanel from "./pages/AdminPanel";
import CreateCourse from "./pages/createCourse";
import UpdateCourse from "./pages/editCourse";
import Faq from "./pages/Faq";
import CreateLesson from "./pages/createLesson";

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "nl"],
    fallbackLng: "en",
    debug: false,
    // Options for language detector
    detection: {
      order: ["cookie", "htmlTag", "path"],
      caches: ["cookie"],
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot" element={<ForgotPassword />} />
          <Route path="new-password/:token" element={<NewPassword />} />
          <Route path="/" element={<App />}>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="home" element={<Home />} />
            <Route path="topics" element={<Topics />} />
            <Route path="topics/:topicId" element={<TopicDetailPage />} />
            <Route path="library" element={<Library />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/create" element={<CreateCourse />} />
            <Route
              path="courses/:courseId/lessons/:lessonId/update"
              element={<UpdateCourse />}
            />
            <Route path="courses/:courseId" element={<Course />} />
            <Route
              path="courses/:courseId/lessons/create"
              element={<CreateLesson />}
            />
            <Route
              path="courses/:courseId/lessons/:lessonId/item/:itemIndex"
              element={<Lesson />}
            />
            <Route path="events" element={<Events />} />
            <Route path="events/:eventId" element={<EventDetailsPage />} />
            <Route path="profile/:userId" element={<Profile />} />
            <Route path="admin" element={<AdminPanel />} />
            <Route path="faq" element={<Faq />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </Suspense>,
  document.getElementById("root")
);
