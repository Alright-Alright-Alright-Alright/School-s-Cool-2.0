/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { t } from "i18next";
import {
  getAllCourses,
  joinCourse,
  leaveCourse,
} from "../../redux/actions/courseActions";
import Icon from "../../components/core/Icon";
import ResourceDashcard from "../../components/core/resourceDashCard/ResourceDashcard";
import courseMocks from "./mocks/courses";

function CourseContentLeft() {
  return (
    <div className="p-6 flex-col space-y-6">
      <ResourceDashcard
        resourceDashCardTitle="Dashboard"
        resourceDashCardStyle="bg-sky"
        resourceDashCardData={[]}
      />
      <ResourceDashcard
        resourceDashCardTitle="My Courses"
        resourceDashCardStyle="bg-yellow"
        resourceDashCardData={courseMocks}
      />
      <ResourceDashcard
        resourceDashCardTitle="Library"
        resourceDashCardStyle="bg-aqua"
        resourceDashCardData={[]}
      />
    </div>
  );
}

CourseContentLeft.propTypes = {};

export default CourseContentLeft;
