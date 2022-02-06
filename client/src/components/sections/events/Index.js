import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
<<<<<<< HEAD
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import Main from "../../layout/main"
=======
import Main from "../../layout/Main"
>>>>>>> dev
import MainEventsContent from "./MainEventsContent"
import { getAllEvents } from "../../../redux/actions/eventActions"

const Index = () => {
  const events = useSelector((state) => state.events.allEvents)
  const [value, onChange] = useState(new Date())
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllEvents())
  }, [dispatch])

  return (
    <div>
      <Main
        main={<MainEventsContent events={events} />}
        contentLeft={<Calendar onChange={onChange} value={value} />}
      />
    </div>
  )
}

export default Index
