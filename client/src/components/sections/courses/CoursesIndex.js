/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import Main from "../../layout/main"
import CourseMainContent from "./CourseMainContent"
import CourseContentLeft from "./CourseContentLeft"
import CourseContentRight from "./CourseContentRight"

const CoursesIndex = () => {
  const [courseId, setCourseId] = useState(null)

  return (
    <>
      <Main
        contentRight={<CourseContentRight />}
        contentLeft={<CourseContentLeft setCourseId={(e) => setCourseId(e)} />}
        // main={<CourseMainContent courseId={courseId} />}
      />
    </>
  )
}

export default CoursesIndex
