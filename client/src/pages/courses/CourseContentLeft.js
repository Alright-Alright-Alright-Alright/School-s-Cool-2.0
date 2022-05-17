/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import {
  getAllCourses,
  joinCourse,
  leaveCourse,
} from "../../redux/actions/courseActions"
import Icon from "../../components/core/Icon"

function CourseContentLeft({ setCourseId }) {
  const [filter, setFilter] = useState("All courses")
  const courses = useSelector((state) => state.courses.allCourses)
  const user = useSelector((state) => state.user.singleUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCourses())
  }, [dispatch])

  const handleJoinCourse = (courseId) => {
    dispatch(joinCourse(courseId))
  }

  const handleLeaveCourse = (courseId) => {
    dispatch(leaveCourse(courseId))
  }

  let filterRule
  switch (filter) {
    case "My courses":
      filterRule = (item) => user.courses.includes(item.sys.id)
      break
    default:
      filterRule = (item) => item
  }

  const filteredCourses = courses.filter(filterRule)

  return (
    <>
      <div className="pl-5 pt-10">
        <section className="flex flex-col items-start">
          <button
            type="button"
            className="text-lg hover:text-yellow"
            onClick={() => setFilter("All courses")}
          >
            All courses
          </button>
          <button
            type="button"
            className="text-lg hover:text-yellow"
            onClick={() => setFilter("My courses")}
          >
            View my Courses
          </button>
        </section>
        <hr className="mt-8 w-52 text-grey-light" />
        <section>
          {filteredCourses?.map((item) => (
            <div key={item.title}>
              <div className="flex justify-between items-center">
                <Link to={`/courses/${item.sys.id}`}>
                  <button
                    type="button"
                    className="text-xl py-2 hover:text-yellow text-left"
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
