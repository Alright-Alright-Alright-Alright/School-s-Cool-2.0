/* eslint-disable react/prop-types */
import React from "react"
import { useSelector } from "react-redux"
import RichTextRenderer from "../../../middleware/RichTextRenderer"

function CourseDetailMainContent({ eLearningPageContent }) {
  const singleCourse = useSelector(
    (state) => state.courses.singleCourse.eLearningModule
  )

  const document = eLearningPageContent?.richTextField?.json
  return (
    <>
      {eLearningPageContent ? (
        <div className="h-screen mt-8 relative pl-5">
          <div className="pb-8">
            <div className="flex justify-between">
              <div className="p-3">
                <h1>{eLearningPageContent?.title}</h1>
                {RichTextRenderer(document)}
              </div>
              <img
                src={eLearningPageContent?.image?.url}
                alt="course"
                className="w-2/8 object-fill h-full p-3"
              />
            </div>
            <p>{eLearningPageContent?.plainLongTextField}</p>
            <p>{eLearningPageContent?.plainTextField}</p>
          </div>
        </div>
      ) : (
        <div>
          <h1>{singleCourse?.title}</h1>
        </div>
      )}
    </>
  )
}

export default CourseDetailMainContent
