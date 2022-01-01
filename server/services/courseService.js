const { addUserToCourseDb, takeOutUserFromCourseDb } = require('../db/courseDb');

const joinCourseService = async (courseId, user) => {
    try {
      return await addUserToCourseDb(courseId, user);
    } catch (error) {
      throw new Error(error);
    }
  };
  
const leaveCourseService = async (courseId, user) => {
    try {
      return await takeOutUserFromCourseDb(courseId, user);
    } catch (error) {
      throw new Error(error);
    }
  };

module.exports = {
    joinCourseService,
    leaveCourseService,
};