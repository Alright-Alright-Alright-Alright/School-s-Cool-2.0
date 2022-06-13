import { service, configHeaders } from "../api/axios";

export const getCourses = () =>
  service
    .get("/courses", configHeaders())
    .then((response) => response.data.data);

export const getCourse = (id) =>
  service
    .get(`/courses/${id}`, configHeaders())
    .then((response) => response.data.data);

export const getLesson = (id) =>
  service
    .get(`/lessons/${id}`, configHeaders())
    .then((response) => response.data.data);
