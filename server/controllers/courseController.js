const { joinCourseService, leaveCourseService } = require('../services/courseService');

const joinCourse = async (req, res, next) => {
    const user = req.user.userLogedIn._id;
    const courseId = req.body.courseId;
    try {
      let updatedUser = await joinCourseService(courseId, user);
      return res.status(201).json(updatedUser);
    } catch (e) {
      res.status(500).json({ message: e.message }) && next(e);
    }
  };
  
const leaveCourse = async (req, res, next) => {
    const user = req.user.userLogedIn._id;
    const courseId = req.body.courseId;
    try {
      let updatedUser = await leaveCourseService(courseId, user);
      return res.status(201).json(updatedUser);
    } catch (e) {
      res.status(500).json({ message: e.message }) && next(e);
    }
  };
  
module.exports = {
    joinCourse,
    leaveCourse,
};