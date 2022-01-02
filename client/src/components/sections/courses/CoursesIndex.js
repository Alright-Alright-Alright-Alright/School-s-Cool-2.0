/* eslint-disable no-unused-vars */
import React from "react"
import Main from "../../layout/main"
import CourseMainContent from "./CourseMainContent"
import CourseContentLeft from "./CourseContentLeft"

const CoursesIndex = () => (
  <>
    <Main contentLeft={<CourseContentLeft />} main={<CourseMainContent />} />
  </>
)

export default CoursesIndex
