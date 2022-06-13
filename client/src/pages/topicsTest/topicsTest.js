/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTopics } from "../../redux/actions/topicActions";
import { getAllEvents } from "../../redux/actions/eventActions";
import { getAllCourses } from "../../redux/actions/elearningActions";
import { loginUser, logoutUser } from "../../redux/actions/userActions";

// eslint-disable-next-line react/prop-types
const TopicsTest = () => {
  const topics = useSelector((state) => state.topics);
  const user = useSelector((state) => state.user);
  const UI = useSelector((state) => state.UI);

  const dispatch = useDispatch();

  const loginNewUser = { email: "dirk@dozijn13.nl", password: "1234567" };

  useEffect(() => {
    dispatch(getAllTopics());
  }, [dispatch]);

  return (
    <>
      <h1>Hello, this is a message from the server: {topics.topics.message}</h1>
      <button type="submit" onClick={() => dispatch(loginUser(loginNewUser))}>
        Click on me to login
      </button>
      <h2>Logged in user is: {user.firstName}</h2>
      <p>Errors: {UI.errors ? <p>{UI.errors.message}</p> : null}</p>
      <button type="submit" onClick={() => dispatch(logoutUser())}>
        Click on me to log out
      </button>
      <div>
        <button type="submit" onClick={() => dispatch(getAllEvents())}>
          Click on me to get all events
        </button>
      </div>
      <div>
        <button type="submit" onClick={() => dispatch(getAllCourses())}>
          Click on me to get all courses
        </button>
      </div>
    </>
  );
};

export default TopicsTest;
