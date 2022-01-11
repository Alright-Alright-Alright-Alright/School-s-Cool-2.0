/* eslint-disable import/extensions */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, useParams } from "react-router-dom"
import Icon from "../../core/Icon"
import {
  getAllCourses,
  joinCourse,
  leaveCourse,
} from "../../../redux/actions/courseActions"

function CourseMainContent() {
  const courses = useSelector((state) => state.courses.allCourses)
  const [join, setJoin] = useState(false)
  const dispatch = useDispatch()
  const params = useParams()

  const handleJoinCourse = (courseId) => {
    dispatch(joinCourse(courseId))
  }

  const handleLeaveCourse = (courseId) => {
    dispatch(leaveCourse(courseId))
  }

  const courseCards = courses.map((course) => (
    <div className="px-5 py-3">
      <div className="flex flex-col justify-between w-full  bg-white shadow-xl rounded-br-3xl rounded-bl-3xl rounded-tr-3xl">
        <Link to={`/courses/${course.sys.id}`}>
          <section className="">
            <img
              src="https://picsum.photos/seed/picsum/600/300"
              alt="event_Image"
              className="object-cover h-36 w-full rounded-tr-3xl"
            />
          </section>
          <section className="border-b-2 border-grey-light mx-3 flex flex-col justify-around">
            <div className="flex items-center">
              <h1 className="text-md w-2/4">{course?.title}</h1>
              {/* <p className="text-base w-3/4 pl-2">{event.description}</p> */}
            </div>
            <div className="flex-col justify-around">
              {/* <p className="text-sm">{course?.description}</p> */}
              <p className="text-sm">
                {course?.eLearningLessonsCollection.items.map((lesson) => (
                  <p>{lesson.title}</p>
                ))}
              </p>
            </div>
          </section>
        </Link>

        <section className="h-12">
          <div className="flex justify-between">
            <div className="flex p-3">
              <Icon
                iconName="member"
                iconStyle="fill-inactive text-grey-dark"
              />
              <span>{course?.attendees?.length}</span>
            </div>
            <div className="p-3">
              {join ? (
                <button
                  type="button"
                  onClick={() => handleJoinCourse(course.sys.id)}
                >
                  <Icon
                    iconName="follow"
                    iconStyle="fill-active text-grey-dark"
                  />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => handleLeaveCourse(course.sys.id)}
                >
                  <Icon
                    iconName="follow"
                    iconStyle="fill-inactive text-grey-dark"
                  />
                </button>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  ))

  return (
    <div className=" pt-6">
      {courseCards}
      {/* {courses.map((course) => (
        <div key={course.id}>
          <Link to={`/courses/${course.sys.id}`}>
            <h2 className="text-lg">{course.title}</h2>
            <p className="text-sm">{course.description}</p>
          </Link>
        </div>
      ))} */}
    </div>
  )
}

export default CourseMainContent
