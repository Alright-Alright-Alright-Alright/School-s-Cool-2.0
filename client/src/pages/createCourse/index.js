import React from "react";
import Main from "../../components/layout/Main";
import NavMenu from "./NavMenu";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { createCourse } from "../../redux/actions/elearningActions";

function CourseBuilder() {
  const dispatch = useDispatch();

  const submit = async (title, description, imageUrl) => {
    await dispatch(createCourse(title, description, imageUrl));
    console.log("course created");
  };

  return <Main contentLeft={<NavMenu />} main={<Form submit={submit} />} />;
}

CourseBuilder.propTypes = {};

export default CourseBuilder;
