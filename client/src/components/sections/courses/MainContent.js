import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import PropTypes from "prop-types"
import { getSingleCourse } from "../../../redux/actions/courseActions"
import Button from "../../core/Button"

function MainContent({ courseId }) {
  const singleCourse = useSelector((state) => state.courses.singleCourse)
  const [courseContent, setCourseContent] = useState(null)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSingleCourse(courseId))
  }, [dispatch, courseId])

  console.log(singleCourse)
  console.log(courseContent)

  return (
    <div className=" pt-6">
      {singleCourse?.eLearningModule?.pagesCollection?.items?.map((item) => (
        <span key={item.title} className="p-3">
          <Button
            buttonName={item.title}
            buttonStyle="btnCourseStyle"
            onClick={() => setCourseContent(item)}
          />
        </span>
      ))}
      <div className="h-screen mt-8 relative">
        {courseContent ? (
          <div className="pb-8">
            <h1>{courseContent?.title}</h1>
            <p>{courseContent?.plainLongTextField}</p>
            <p>{courseContent?.plainTextField}</p>
            <img src={courseContent?.image?.url} alt="course" />
          </div>
        ) : (
          <div>
            <h1>{singleCourse?.eLearningModule?.description}</h1>
          </div>
        )}
      </div>
    </div>
  )
}

MainContent.propTypes = {
  courseId: PropTypes.string.isRequired,
}

export default MainContent
