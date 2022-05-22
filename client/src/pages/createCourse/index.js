import React from "react";
import Main from "../../components/layout/Main";
import NavMenu from "./NavMenu";
import Form from "./Form";

function CourseBuilder() {
  return <Main contentLeft={<NavMenu />} main={<Form />} />;
}

CourseBuilder.propTypes = {};

export default CourseBuilder;
