import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneEvent } from "../../../redux/actions/eventActions";
import Main from "../../layout/Main";
import EventDetailContentLeft from "./EventDetailContentLeft";
import EventDetailContentRight from "./EventDetailContentRight";
import EventDetailMainContent from "./EventDetailMainContent";
import { getAllTheUsers } from "../../../redux/actions/userActions";

const eventDetailIndex = () => {
  const dispatch = useDispatch();
  const { eventId } = useParams();
  const event = useSelector((state) => state.events.singleEvent);
  const allUsers = useSelector((state) => state.user.users);
  const user = useSelector((state) => state.user.singleUser);
  const [showModal, setshowModal] = useState(false);
  const [editModal, seteditModal] = useState(false);

  useEffect(() => {
    dispatch(getOneEvent(eventId));
    dispatch(getAllTheUsers());
  }, [dispatch, eventId]);

  const showEditModal = () => {
    setshowModal(!showModal);
    seteditModal(!editModal);
  };

  return (
    <>
      <Main
        contentLeft={
          <EventDetailContentLeft
            event={event}
            user={user}
            showEditModal={showEditModal}
          />
        }
        contentRight={
          <EventDetailContentRight event={event} users={allUsers} />
        }
        main={
          <EventDetailMainContent
            event={event}
            showModal={showModal}
            showEditModel={showEditModal}
            editModal={editModal}
          />
        }
      />
    </>
  );
};

export default eventDetailIndex;
