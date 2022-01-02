/* eslint-disable import/extensions */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, useParams } from "react-router-dom"

function CourseMainContent() {
  const courses = useSelector((state) => state.courses.allCourses)

  const dispatch = useDispatch()
  const params = useParams()

  return (
    <div className=" pt-6">
      {courses.map((course) => (
        <div key={course.id}>
          <Link to={`/courses/${course.sys.id}`}>
            <h2 className="text-lg">{course.title}</h2>
            <p className="text-sm">{course.description}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default CourseMainContent
