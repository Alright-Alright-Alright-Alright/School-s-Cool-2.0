/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import {
  getAllCourses,
  joinCourse,
  leaveCourse,
} from "../../../redux/actions/courseActions"
import Icon from "../../core/Icon"

function CourseContentLeft({ setCourseId }) {
  const [joinedCourse, setJoinedCourse] = useState(false)
  const [showLessons, setShowLessons] = useState(false)
  const courses = useSelector((state) => state.courses.allCourses)
  const user = useSelector((state) => state.user.singleUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCourses())
  }, [dispatch])

  const handleShowLesson = () => {
    setShowLessons(!showLessons)
  }

  const handleJoinCourse = (courseId) => {
    dispatch(joinCourse(courseId))
  }

  const handleLeaveCourse = (courseId) => {
    dispatch(leaveCourse(courseId))
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
                <Link to={`/courses/${item.sys.id}`}>
                  <button
                    type="button"
                    className="text-xl py-2 hover:text-yellow text-left"
                    onClick={(e) => handleShowLesson(e)}
                  >
                    <p>{item.title}</p>
                  </button>
                </Link>
                {user.courses.includes(item.sys.id) ? (
                  <button
                    type="button"
                    onClick={() => handleLeaveCourse(item.sys.id)}
                  >
                    <Icon
                      iconName="add"
                      iconStyle="fill-active text-grey-dark"
                    />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleJoinCourse(item.sys.id)}
                  >
                    <Icon
                      iconName="add"
                      iconStyle="fill-inactive text-grey-dark"
                    />
                  </button>
                )}
              </div>
              {showLessons ? (
                <ul>
                  {item?.eLearningLessonsCollection?.items?.map((lesson) => (
                    <Link
                      to={`/courses/${item.sys.id}/lesson/${lesson.sys.id}`}
                    >
                      <li
                        className="hover:text-yellow"
                        aria-hidden="true"
                        key={lesson.sys.id}
                        onClick={() => setCourseId(lesson.sys.id)}
                      >
                        {lesson.title}
                      </li>
                    </Link>
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