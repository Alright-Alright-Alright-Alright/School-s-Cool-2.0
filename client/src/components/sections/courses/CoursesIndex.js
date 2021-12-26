import React, { useState } from "react"
import Main from "../../layout/main"
import MainContent from "./MainContent"
import CourseContentLeft from "./CourseContentLeft"
import CourseContentRight from "./CourseContentRight"

const CoursesIndex = () => {
  const [courseId, setCourseId] = useState(null)

  return (
    <>
      <Main
        contentRight={<CourseContentRight />}
        contentLeft={<CourseContentLeft setCourseId={(e) => setCourseId(e)} />}
        main={<MainContent courseId={courseId} />}
      />
    </>
  )
}

export default CoursesIndex
