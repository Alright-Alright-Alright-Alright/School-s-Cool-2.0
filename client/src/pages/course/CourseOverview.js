import { useParams } from "react-router-dom";
import courses from "../../data/mocks/courses";

function CourseOverview() {
  const params = useParams();
  const course = courses[params.courseId];
  return JSON.stringify(course);
}

CourseOverview.propTypes = {};

export default CourseOverview;
