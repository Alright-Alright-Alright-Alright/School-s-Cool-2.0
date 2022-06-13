/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  CheckCircleIcon as CheckCircleIconOutline,
  ClockIcon,
  DocumentTextIcon,
} from "@heroicons/react/outline";
import { CheckCircleIcon as CheckCircleIconSolid } from "@heroicons/react/solid";
import { PlusIcon, PencilIcon } from "@heroicons/react/solid";

function ListItem(props) {
  const {
    children,
    duration,
    completed,
    index,
    items,
    lessonId,
    courseId,
    isAdmin,
  } = props;
  return (
    <div className="flex gap-8">
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
      {isAdmin ? (
        <Link
          to={`lessons/${lessonId}/update`}
          className="bg-none flex gap-2 text-sky hover:text-sky-dark my-auto"
        >
          <PencilIcon className="h-5 " />
          <p className="">Edit</p>
        </Link>
      ) : null}
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
  isAdmin: PropTypes.bool.isRequired,
};

function LessonOverview(props) {
  const { lessons, isAdmin } = props;

  return (
    <section className="p-6">
      <h1 className="text-grey-dark font-bold text-xl">Lesson 1</h1>
      <ul className="flex flex-col space-y-3 pt-6">
        {lessons.map((lesson, index) => (
          <li key={lesson._id}>
            <ListItem
              completed={lesson.completed}
              duration={lesson.duration}
              items={lesson.items.length}
              index={index}
              lessonId={lesson._id}
              courseId={lesson.course}
              isAdmin={isAdmin}
            >
              {lesson.title}
            </ListItem>
          </li>
        ))}
        {isAdmin ? (
          <li>
            <Link to={`lessons/create`}>
              <button className="p-2 mt-2 flex gap-2 justify-between text-white bg-sky rounded-md shadow-md hover:shadow-lg hover:bg-sky-dark">
                <PlusIcon className="h-5 m-auto" />
                <p>Create lesson</p>
              </button>
            </Link>
          </li>
        ) : null}
      </ul>
    </section>
  );
}

LessonOverview.propTypes = {
  lessons: PropTypes.arrayOf(PropTypes.object),
  isAdmin: PropTypes.bool.isRequired,
};

export default LessonOverview;
