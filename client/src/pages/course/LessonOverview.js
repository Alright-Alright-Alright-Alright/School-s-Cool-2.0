/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
import {
  CheckCircleIcon as CheckCircleIconOutline,
  ClockIcon,
  DocumentTextIcon,
} from "@heroicons/react/outline";
import { CheckCircleIcon as CheckCircleIconSolid } from "@heroicons/react/solid";
import courses from "../../data/mocks/courses";

function ListItem(props) {
  const { children, duration, completed, index, items, lessonId, courseId } =
    props;
  return (
    <div className="w-full py-3 px-4 text-left grid grid-cols-3 rounded-md shadow-sm bg-white">
      <div className="flex">
        {`${index}.\t`}
        {children}
      </div>
      <div className="flex flex-row-reverse gap-x-4 col-span-2">
        <Link
          className="bg-sky rounded-md text-white py-1 px-4 hover:bg-sky-dark"
          to={`/courses/${courseId}/lessons/${lessonId}/item/0`}
        >
          Start
        </Link>
        <span className="flex gap-x-2 w-32">
          {completed ? (
            <CheckCircleIconSolid className="h-5 w-5 text-sky" />
          ) : (
            <CheckCircleIconOutline className="h-5 w-5 text-grey-dark" />
          )}
          <p>
            {completed ? (
              <p className="text-sky">Completed</p>
            ) : (
              <p>Not Started</p>
            )}
          </p>
        </span>
        <span className="flex gap-x-1 border-r-2 border-grey-medium_light pr-4">
          <ClockIcon className="h-5 w-5 text-grey-medium" />
          <p className="text-grey-medium">{duration}</p>
        </span>
        <span className="flex gap-x-1">
          <DocumentTextIcon className="h-5 w-5 text-grey-medium" />
          <p className="text-grey-medium">{items}</p>
        </span>
      </div>
    </div>
  );
}

ListItem.propTypes = {
  children: PropTypes.element.isRequired,
  duration: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired,
  lessonId: PropTypes.number.isRequired,
  courseId: PropTypes.number.isRequired,
};

function LessonOverview() {
  const params = useParams();
  const course = courses.find((a) => a._id === params.courseId);
  return (
    <section className="p-6">
      <h1 className="text-grey-dark font-bold text-xl">Lesson 1</h1>
      <ul className="flex flex-col space-y-3 pt-6">
        {course.lessons.map((lesson, index) => (
          <ul>
            <ListItem
              completed={lesson.completed}
              duration={lesson.duration}
              items={lesson.items.length}
              index={index}
              lessonId={lesson._id}
              courseId={params.courseId}
            >
              {lesson.title}
            </ListItem>
          </ul>
        ))}
      </ul>
    </section>
  );
}

LessonOverview.propTypes = {};

export default LessonOverview;
