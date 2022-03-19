import React, { useEffect, useMemo } from "react"
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

  const eventsMemo = useMemo(() => events, [events])

  return (
    <div>
      <Main
        main={<MainEventsContent events={eventsMemo} />}
        contentLeft={<EventsContentLeft />}
      />
    </div>
  )
}

export default Index
