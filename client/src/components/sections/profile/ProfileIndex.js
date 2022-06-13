import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Main from "../../layout/Main";
import ProfileMainContent from "./ProfileMainContent";
import { getUserProfile } from "../../../redux/actions/userActions";
import { getAlltopics } from "../../../redux/actions/topicActions";
import { getAllEvents } from "../../../redux/actions/eventActions";
import { getAllCourses } from "../../../redux/actions/elearningActions";
import { getAllFilesFromLibrary } from "../../../redux/actions/libraryActions";

function ProfileIndex() {
  const userProfile = useSelector((state) => state.user.userProfile);
  const topics = useSelector((state) => state.topics.allTopics);
  const courses = useSelector((state) => state.elearning.courses);
  const events = useSelector((state) => state.events.allEvents);
  const files = useSelector((state) => state.library.allFiles);

  const dispatch = useDispatch();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(getUserProfile(userId));
    dispatch(getAlltopics());
    dispatch(getAllFilesFromLibrary());
    dispatch(getAllEvents());
    dispatch(getAllCourses());
  }, [dispatch, userId]);

  return (
    <>
      <Main
        main={
          <ProfileMainContent
            userProfile={userProfile}
            topics={topics}
            courses={courses}
            events={events}
            files={files}
          />
        }
      />
    </>
  );
}

export default ProfileIndex;
