/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, useParams } from "react-router-dom"
import {
  getSingleCourse,
  getSingleLesson,
} from "../../../redux/actions/courseActions"

function CourseDetailLeft({ eLearningPageContent }) {
  const singleCourse = useSelector(
    (state) => state.courses.singleCourse.eLearningModule
  )

  const singleLesson = useSelector(
    (state) => state.courses.singleLesson.eLearningLesson
  )

  const dispatch = useDispatch()
  const params = useParams()

  useEffect(() => {
    dispatch(getSingleCourse(params.courseId))
  }, [dispatch, params.courseId])

  console.log(singleCourse)

  return (
    <>
      <div className="pl-5 pt-10">
        <section className="flex-col">
          <Link to="/courses/">
            <button type="button" className="text-lg hover:text-yellow">
              Back to all courses
            </button>
          </Link>
          <h2 className="text-lg ">{singleCourse?.title}</h2>
        </section>
        <hr className="mt-8 w-52 text-grey-light" />
        <section>
          {singleCourse?.eLearningLessonsCollection?.items.map((lesson) => (
            <div key={lesson.id}>
              <p>{lesson.description}</p>
              <button
                type="button"
                onClick={() => dispatch(getSingleLesson(lesson.sys.id))}
                className="text-lg hover:text-yellow py-3"
              >
                {" "}
                Show lessons{" "}
              </button>
            </div>
          ))}
          {singleLesson?.eLearningPagesCollection?.items?.map((page) => (
            <button
              type="button"
              key={page.id}
              onClick={() => eLearningPageContent(page)}
              className=" text-base hover:text-yellow py-3"
            >
              <ul className=" list-disc list-inside text-left">
                <li>{page.title}</li>
                {/* <p>{page.description}</p> */}
              </ul>
            </button>
          ))}
        </section>
      </div>
    </>
  )
}

export default CourseDetailLeft
