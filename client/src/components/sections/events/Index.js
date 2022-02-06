import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import EventsContentLeft from "./EventsContentLeft"

import Main from "../../layout/Main"
import MainEventsContent from "./MainEventsContent"
import { getAllEvents } from "../../../redux/actions/eventActions"

const Index = () => {
  const events = useSelector((state) => state.events.allEvents)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllEvents())
  }, [dispatch])

  return (
    <div>
      <Main
        main={<MainEventsContent events={events} />}
        contentLeft={<EventsContentLeft />}
      />
    </div>
  )
}

export default Index
