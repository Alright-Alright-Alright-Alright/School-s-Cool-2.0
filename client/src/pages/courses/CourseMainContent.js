/* eslint-disable no-underscore-dangle */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CourseCard from "./CourseCard";
import AddCourseCard from "./AddCourseCard";
import { getAllCourses } from "../../redux/actions/elearningActions";

function CourseMainContent() {
  const courses = useSelector((state) => state.elearning.courses);

  console.log("test", { courses });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);

  return (
    <main className="p-6 flex flex-col space-y-6">
      <h1 className="bg-grey-dark text-white p-8 rounded-b-md rounded-tr-md w-full text-lg">
        {/* TODO: Make name dynamic */}
        Hi Sebastiaan, ready to learn?
      </h1>
      <section className="grid grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard
            key={course._id}
            id={course._id}
            image={course.imageUrl}
            topics={course.lessons.length}
            members={course.members}
            completed={course.completed}
            title={course.title}
            joined={false}
          />
        ))}
        <AddCourseCard />
      </section>
    </main>
  );
}

export default CourseMainContent;
