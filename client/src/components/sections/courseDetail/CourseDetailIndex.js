import React, { useState } from "react"
import Main from "../../layout/Main"
import CourseDetailMainContent from "./CourseDetailMainContent"
// import CourseDetailRight from "./CourseDetailRight"
import CourseDetailLeft from "./CourseDetailLeft"

function CourseDetailIndex() {
  const [eLearningPageContent, seteLearningPageContent] = useState(null)
  return (
    <>
      <Main
        // contentRight={<CourseDetailRight />}
        contentLeft={
          <CourseDetailLeft
            eLearningPageContent={(e) => seteLearningPageContent(e)}
          />
        }
        main={
          <CourseDetailMainContent
            eLearningPageContent={eLearningPageContent}
          />
        }
      />
    </>
  )
}

export default CourseDetailIndex
