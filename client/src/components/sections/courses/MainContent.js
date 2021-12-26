/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import PropTypes from "prop-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import {
  getSingleCourse,
  getSingleLesson,
} from "../../../redux/actions/courseActions"
import Button from "../../core/Button"

function MainContent({ courseId }) {
  const singleCourse = useSelector((state) => state.courses.singleCourse)
  const [courseContent, setCourseContent] = useState(null)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSingleCourse(courseId))
    dispatch(getSingleLesson(courseId))
  }, [dispatch, courseId])

  console.log(singleCourse)
  console.log(courseContent)

  const document = courseContent?.richTextField?.json

  const Bold = ({ children }) => <p className="font-bold py-3">{children}</p>

  const Text = ({ children }) => <p className="text-left text-sm">{children}</p>

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className=" text-lg py-3">{children}</h1>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc">
          <li className="pt-3">{children}</li>
        </ul>
      ),
    },
    renderText: (text) => text.replace("!", "?"),
  }

  return (
    <div className=" pt-6">
      {singleCourse?.eLearningLesson?.eLearningPagesCollection?.items?.map(
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
                {documentToReactComponents(document, options)}
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
