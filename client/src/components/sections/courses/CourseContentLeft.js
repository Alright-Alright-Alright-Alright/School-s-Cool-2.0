/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getAllCourses } from "../../../redux/actions/courseActions"

function MainContent({ setCourseId }) {
  const courses = useSelector((state) => state.courses.allCourses)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCourses())
  }, [dispatch])

  return (
    <>
      <div className="pl-5 pt-10">
        <section className="flex">
          <p className="text-lg">Courses</p>
        </section>
        <hr className="mt-8 w-52 text-grey-light" />
        <section>
          {courses?.map((item) => (
            <div key={item.title}>
              <button
                type="button"
                className="text-xl py-2 hover:text-yellow"
                onClick={() => setCourseId(item.sys.id)}
              >
                <p>{item.headerTitle}</p>
              </button>
            </div>
          ))}
        </section>
      </div>
    </>
  )
}

export default MainContent
