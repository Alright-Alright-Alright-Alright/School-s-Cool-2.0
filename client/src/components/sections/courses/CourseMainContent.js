/* eslint-disable import/extensions */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import PropTypes from "prop-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import {
  getSingleCourse,
  getSingleLesson,
} from "../../../redux/actions/courseActions"
import Button from "../../core/Button"
import RichTextRenderer from "../../../middleware/RichTextRenderer"

function CourseMainContent() {
  const singleLesson = useSelector((state) => state.courses.singleLesson)
  const singleCourse = useSelector(
    (state) => state.courses.singleCourse.eLearningModule
  )
  const [courseContent, setCourseContent] = useState(null)

  const dispatch = useDispatch()
  const params = useParams()

  useEffect(() => {
    dispatch(getSingleCourse(params.courseId))
    dispatch(getSingleLesson(params.courseId))
  }, [dispatch, params.courseId])

  const document = courseContent?.richTextField?.json

  return (
    <div className=" pt-6">
      <p>{params.courseId}</p>
      <p>Deze module heet: {singleCourse?.title}</p>
      <p>De lessen in deze module zijn: </p>
      <ul className="list-disc list-inside">
        {singleCourse?.eLearningLessonsCollection?.items?.map((item) => (
          <li key={item?.sys?.id}>{item?.title}</li>
        ))}
      </ul>
      {/* {singleLesson?.eLearningLesson?.eLearningPagesCollection?.items?.map(
        (item) => (
          <span key={item.title} className="p-3">
            <Button
              buttonName={item.title}
              buttonStyle="btnCourseStyle"
              onClick={() => setCourseContent(item)}
            />
          </span>
        )
      )}
      <div className="h-screen mt-8 relative pl-5">
        {courseContent ? (
          <div className="pb-8">
            <div className="flex justify-between">
              <div className="p-3">
                <h1>{courseContent.title}</h1>
                {RichTextRenderer(document)}
              </div>
              <img
                src={courseContent?.image?.url}
                alt="course"
                className="w-2/8 object-fill h-full p-3"
              />
            </div>
            <p>{courseContent?.plainLongTextField}</p>
            <p>{courseContent?.plainTextField}</p>
          </div>
        ) : (
          <div>
            <h1>{singleLesson?.eLearningLesson?.title}</h1>

            <h1>{singleLesson?.eLearningLesson?.description}</h1>
          </div>
        )}
      </div> */}
    </div>
  )
}

CourseMainContent.propTypes = {
  courseId: PropTypes.string.isRequired,
}

export default CourseMainContent
