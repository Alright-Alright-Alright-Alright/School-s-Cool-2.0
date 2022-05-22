import React from "react";
import Main from "../../components/layout/Main";
import NavMenu from "./NavMenu";
import Content from "./Content";

function CourseBuilder() {
  return <Main contentLeft={<NavMenu />} main={<Content />} />;
}

CourseBuilder.propTypes = {};

export default CourseBuilder;
