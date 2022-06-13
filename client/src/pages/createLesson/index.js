import React from "react";
import PropTypes from "prop-types";
import Main from "../../components/layout/Main";
import CreateLessonForm from "./createLessonForm";
import { createLesson } from "../../redux/actions/elearningActions";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function CreateLesson() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const submit = async (title, description) => {
    const lessonId = await dispatch(
      createLesson(params.courseId, title, description)
    );
    navigate(`/courses/${params.courseId}/lessons/${lessonId}/update`);
  };

  return <Main main={<CreateLessonForm submit={submit} />} />;
}
CreateLesson.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default CreateLesson;
