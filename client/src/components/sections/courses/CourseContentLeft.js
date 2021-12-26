import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import PropTypes from "prop-types"
import { getAllCourses } from "../../../redux/actions/courseActions"
import Icon from "../../core/Icon"

function CourseContentLeft({ setCourseId }) {
  const [showLessons, setShowLessons] = useState(false)
  const courses = useSelector((state) => state.courses.allCourses)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCourses())
  }, [dispatch])

  const handleShowLesson = () => {
    setShowLessons(!showLessons)
  }

  console.log(courses)

  return (
    <>
      <div className="pl-5 pt-10">
        <section className="flex-col">
          <p className="text-lg ">Courses</p>
          <button type="button" className="text-lg hover:text-yellow">
            View my Courses
          </button>
        </section>
        <hr className="mt-8 w-52 text-grey-light" />
        <section>
          {courses?.map((item) => (
            <div key={item.title}>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  className="text-xl py-2 hover:text-yellow text-left"
                  onClick={(e) => handleShowLesson(e)}
                >
                  <p>{item.title}</p>
                </button>
                <button type="button" onClick={() => console.log(item)}>
                  <Icon
                    iconName="add"
                    iconStyle="fill-inactive text-grey-dark"
                  />
                </button>
              </div>
              {showLessons ? (
                <ul>
                  {item?.eLearningLessonsCollection?.items?.map((lesson) => (
                    <li
                      className="hover:text-yellow"
                      aria-hidden="true"
                      key={lesson.sys.id}
                      onClick={() => setCourseId(lesson.sys.id)}
                    >
                      {lesson.title}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </section>
      </div>
    </>
  )
}

CourseContentLeft.propTypes = {
  setCourseId: PropTypes.func.isRequired,
}

export default CourseContentLeft
