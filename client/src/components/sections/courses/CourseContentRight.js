/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import PropTypes from "prop-types"
import { getAllCourses } from "../../../redux/actions/courseActions"

function CourseContentRight({ setCourseId }) {
  const singleCourse = useSelector((state) => state.courses.singleCourse)

  return <></>
}

export default CourseContentRight
