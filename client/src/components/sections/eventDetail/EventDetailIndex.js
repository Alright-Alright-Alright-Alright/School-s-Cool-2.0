/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getOneEvent } from "../../../redux/actions/eventActions"
import Main from "../../layout/Main"
import EventDetailContentLeft from "./EventDetailContentLeft"
import EventDetailContentRight from "./EventDetailContentRight"
import EventDetailMainContent from "./EventDetailMainContent"
import { getAllTheUsers } from "../../../redux/actions/userActions"

const eventDetailIndex = () => {
  const dispatch = useDispatch()
  const { eventId } = useParams()
  const event = useSelector((state) => state.events.singleEvent)
  const allUsers = useSelector((state) => state.user.users)

  useEffect(() => {
    dispatch(getOneEvent(eventId))
    dispatch(getAllTheUsers())
  }, [dispatch, eventId])

  return (
    <>
      <Main
        contentLeft={<EventDetailContentLeft event={event} />}
        contentRight={
          <EventDetailContentRight event={event} users={allUsers} />
        }
        main={<EventDetailMainContent event={event} />}
      />
    </>
  )
}

export default eventDetailIndex
