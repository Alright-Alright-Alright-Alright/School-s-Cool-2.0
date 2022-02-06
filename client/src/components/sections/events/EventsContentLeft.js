/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import Calendar from "react-calendar"

const EventsContentLeft = () => {
  const [value, onChange] = useState(new Date())
  const currentMonth = new Date().getMonth()

  return (
    <div className="min-h-screen pl-8 pt-2">
      <h1 className="text-sky py-4">January</h1>
      {currentMonth === 0 && <Calendar onChange={onChange} value={value} />}
      <h1 className="text-sky py-4">February</h1>
      {currentMonth === 1 && <Calendar onChange={onChange} value={value} />}
      <h1 className="text-sky py-4">March</h1>
      {currentMonth === 2 && <Calendar onChange={onChange} value={value} />}
      <h1 className="text-sky py-4">April</h1>
      {currentMonth === 3 && <Calendar onChange={onChange} value={value} />}
      <h1 className="text-sky py-4">May</h1>
      {currentMonth === 4 && <Calendar onChange={onChange} value={value} />}
      <h1 className="text-sky py-4">June</h1>
      {currentMonth === 5 && <Calendar onChange={onChange} value={value} />}
      <h1 className="text-sky py-4">July</h1>
      {currentMonth === 6 && <Calendar onChange={onChange} value={value} />}
      <h1 className="text-sky py-4">August</h1>
      {currentMonth === 7 && <Calendar onChange={onChange} value={value} />}
      <h1 className="text-sky py-4">September</h1>
      {currentMonth === 8 && <Calendar onChange={onChange} value={value} />}
      <h1 className="text-sky py-4">October</h1>
      {currentMonth === 9 && <Calendar onChange={onChange} value={value} />}
      <h1 className="text-sky py-4">November</h1>
      {currentMonth === 10 && <Calendar onChange={onChange} value={value} />}
      <h1 className="text-sky py-4">December</h1>
      {currentMonth === 11 && <Calendar onChange={onChange} value={value} />}
    </div>
  )
}

export default EventsContentLeft
