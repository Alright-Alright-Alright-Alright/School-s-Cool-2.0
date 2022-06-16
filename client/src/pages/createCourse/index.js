import React from "react";
import Main from "../../components/layout/Main";
import NavMenu from "./NavMenu";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { createCourse } from "../../redux/actions/elearningActions";
import { useNavigate } from "react-router-dom";

function CourseBuilder() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (title, description, imageUrl) => {
    const courseId = await dispatch(createCourse(title, description, imageUrl));
    navigate(`/courses/${courseId}`);
  };

  return <Main contentLeft={<NavMenu />} main={<Form submit={submit} />} />;
}

CourseBuilder.propTypes = {};

export default CourseBuilder;
