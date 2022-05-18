/* eslint-disable no-unused-vars */
import React from "react";
import ResourceDashcard from "../../components/core/resourceDashCard/ResourceDashcard";
import courses from "../../data/mocks/courses";

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
        resourceDashCardData={courses}
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
