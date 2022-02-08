/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import Calendar from "react-calendar"

const EventsContentLeft = () => {
  const [value, onChange] = useState(new Date())
  const [currentMonth, setCurrentMonth] = useState(value.getMonth())

  return (
    <div className="min-h-screen pl-8 pt-2">
      <h1
        className={`${
          (currentMonth === 0 || value.toDateString().slice(4, 7) === "Jan") &&
          "text-sky"
        } py-4`}
      >
        <button
          type="button"
          onClick={() => {
            setCurrentMonth(() => value.setMonth(0))
          }}
        >
          January
        </button>
      </h1>
      {(currentMonth === 0 || value.toDateString().slice(4, 7) === "Jan") && (
        <Calendar onChange={onChange} value={value} />
      )}
      <h1
        className={`${
          (currentMonth === 1 || value.toDateString().slice(4, 7) === "Feb") &&
          "text-sky"
        } py-4`}
      >
        <button
          type="button"
          onClick={() => {
            setCurrentMonth(() => value.setMonth(1))
          }}
        >
          February
        </button>
      </h1>
      {(currentMonth === 1 || value.toDateString().slice(4, 7) === "Feb") && (
        <Calendar onChange={onChange} value={value} />
      )}
      <h1
        className={`${
          (currentMonth === 2 || value.toDateString().slice(4, 7) === "Mar") &&
          "text-sky"
        } py-4`}
      >
        <button
          type="button"
          onClick={() => {
            setCurrentMonth(() => value.setMonth(2))
          }}
        >
          March
        </button>
      </h1>
      {(currentMonth === 2 || value.toDateString().slice(4, 7) === "Mar") && (
        <Calendar onChange={onChange} value={value} />
      )}
      <h1
        className={`${
          (currentMonth === 3 || value.toDateString().slice(4, 7) === "Apr") &&
          "text-sky"
        } py-4`}
      >
        <button
          type="button"
          onClick={() => {
            setCurrentMonth(() => value.setMonth(3))
          }}
        >
          April
        </button>
      </h1>
      {(currentMonth === 3 || value.toDateString().slice(4, 7) === "Apr") && (
        <Calendar onChange={onChange} value={value} />
      )}
      <h1
        className={`${
          (currentMonth === 4 || value.toDateString().slice(4, 7) === "May") &&
          "text-sky"
        } py-4`}
      >
        <button
          type="button"
          onClick={() => {
            setCurrentMonth(() => value.setMonth(4))
          }}
        >
          May
        </button>
      </h1>
      {(currentMonth === 4 || value.toDateString().slice(4, 7) === "May") && (
        <Calendar onChange={onChange} value={value} />
      )}
      <h1
        className={`${
          (currentMonth === 5 || value.toDateString().slice(4, 7) === "Jun") &&
          "text-sky"
        } py-4`}
      >
        <button
          type="button"
          onClick={() => {
            setCurrentMonth(() => value.setMonth(5))
          }}
        >
          June
        </button>
      </h1>
      {(currentMonth === 5 || value.toDateString().slice(4, 7) === "Jun") && (
        <Calendar onChange={onChange} value={value} />
      )}
      <h1
        className={`${
          (currentMonth === 6 || value.toDateString().slice(4, 7) === "Jul") &&
          "text-sky"
        } py-4`}
      >
        <button
          type="button"
          onClick={() => {
            setCurrentMonth(() => value.setMonth(6))
          }}
        >
          July
        </button>
      </h1>
      {(currentMonth === 6 || value.toDateString().slice(4, 7) === "Jul") && (
        <Calendar onChange={onChange} value={value} />
      )}
      <h1
        className={`${
          (currentMonth === 7 || value.toDateString().slice(4, 7) === "Aug") &&
          "text-sky"
        } py-4`}
      >
        <button
          type="button"
          onClick={() => {
            setCurrentMonth(() => value.setMonth(7))
          }}
        >
          August
        </button>
      </h1>
      {(currentMonth === 7 || value.toDateString().slice(4, 7) === "Aug") && (
        <Calendar onChange={onChange} value={value} />
      )}
      <h1
        className={`${
          (currentMonth === 8 || value.toDateString().slice(4, 7) === "Sep") &&
          "text-sky"
        } py-4`}
      >
        <button
          type="button"
          onClick={() => {
            setCurrentMonth(() => value.setMonth(8))
          }}
        >
          September
        </button>
      </h1>
      {(currentMonth === 8 || value.toDateString().slice(4, 7) === "Sep") && (
        <Calendar onChange={onChange} value={value} />
      )}
      <h1
        className={`${
          (currentMonth === 9 || value.toDateString().slice(4, 7) === "Oct") &&
          "text-sky"
        } py-4`}
      >
        <button
          type="button"
          onClick={() => {
            setCurrentMonth(() => value.setMonth(9))
          }}
        >
          October
        </button>
      </h1>
      {(currentMonth === 9 || value.toDateString().slice(4, 7) === "Oct") && (
        <Calendar onChange={onChange} value={value} />
      )}
      <h1
        className={`${
          (currentMonth === 10 || value.toDateString().slice(4, 7) === "Nov") &&
          "text-sky"
        } py-4`}
      >
        <button
          type="button"
          onClick={() => {
            setCurrentMonth(() => value.setMonth(10))
          }}
        >
          November
        </button>
      </h1>
      {(currentMonth === 10 || value.toDateString().slice(4, 7) === "Nov") && (
        <Calendar onChange={onChange} value={value} />
      )}
      <h1
        className={`${
          (currentMonth === 11 || value.toDateString().slice(4, 7) === "Dec") &&
          "text-sky"
        } py-4`}
      >
        <button
          type="button"
          onClick={() => {
            setCurrentMonth(() => value.setMonth(11))
          }}
        >
          December
        </button>
      </h1>
      {(currentMonth === 11 || value.toDateString().slice(4, 7) === "Dec") && (
        <Calendar onChange={onChange} value={value} />
      )}
    </div>
  )
}

export default EventsContentLeft
