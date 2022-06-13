import { service, configHeaders } from "../api/axios";

export const getCourses = () =>
  service
    .get("/courses", configHeaders())
    .then((response) => response.data.data);
