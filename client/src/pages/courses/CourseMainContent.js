/* eslint-disable no-underscore-dangle */
import React from "react";
import courses from "../../data/mocks/courses";
import CourseCard from "./CourseCard";
import AddCourseCard from "./AddCourseCard";

function CourseMainContent() {
  return (
    <main className="p-6 flex flex-col space-y-6">
      <h1 className="bg-grey-dark text-white p-8 rounded-b-xl rounded-tr-xl w-full text-lg">
        Hi Sebastiaan, ready to learn?
      </h1>
      <section className="grid grid-cols-4 gap-8">
        {courses.map((course) => (
          <CourseCard
            key={course._id}
            id={course._id}
            image={course.image}
            topics={course.lessons.length}
            members={course.members}
            completed={course.completed}
            title={course.title}
          />
        ))}
        <AddCourseCard />
      </section>
    </main>
  );
}

export default CourseMainContent;
