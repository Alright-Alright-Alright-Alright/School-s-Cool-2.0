/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getOneEvent } from "../../../redux/actions/eventActions"

const eventDetailsIndex = () => {
  const dispatch = useDispatch()
  const { eventId } = useParams()
  const event = useSelector((state) => state.events.singleEvent)

  useEffect(() => {
    console.log("mounting")
    dispatch(getOneEvent(eventId))
  }, [dispatch])

  console.log(event)

  return (
    <div>
      <h1>{event.title}</h1>
    </div>
  )
}

export default eventDetailsIndex
