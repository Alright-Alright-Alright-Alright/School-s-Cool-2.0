import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import PropTypes from "prop-types"
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
              <button
                type="button"
                className="text-xl py-2 hover:text-yellow"
                onClick={() => setCourseId(item.sys.id)}
              >
                <p>{item.title}</p>
              </button>
            </div>
          ))}
        </section>
      </div>
    </>
  )
}

MainContent.propTypes = {
  setCourseId: PropTypes.func.isRequired,
}

export default MainContent
