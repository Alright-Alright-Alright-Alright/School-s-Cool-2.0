/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import Calendar from "react-calendar"
import { useTranslation } from "react-i18next"

const EventsContentLeft = () => {
  const [value, onChange] = useState(new Date())
  const [currentMonth, setCurrentMonth] = useState(value.getMonth())
  const { t } = useTranslation()

  return (
    <div className="hidden lg:block min-h-screen pl-8 pt-2">
      <h1
        className={`${
          (currentMonth === 0 || value.toDateString().slice(4, 7) === "Jan") &&
          "text-sky"
        } py-3`}
      >
        <button
          type="button"
          onClick={() => {
            setCurrentMonth(() => value.setMonth(0))
          }}
        >
          {t("date.month_names.0")}
        </button>
      </h1>
      {(currentMonth === 0 || value.toDateString().slice(4, 7) === "Jan") && (
        <Calendar onChange={onChange} value={value} />
      )}
      <h1
        className={`${
          (currentMonth === 1 || value.toDateString().slice(4, 7) === "Feb") &&
          "text-sky"
        } py-3`}
      >
        <button
          type="button"
          onClick={() => {
            setCurrentMonth(() => value.setMonth(1))
          }}
        >
          {t("date.month_names.1")}
        </button>
      </h1>
      {(currentMonth === 1 || value.toDateString().slice(4, 7) === "Feb") && (
        <Calendar onChange={onChange} value={value} />
      )}
      <h1
        className={`${
          (currentMonth === 2 || value.toDateString().slice(4, 7) === "Mar") &&
          "text-sky"
        } py-3`}
      >
        <button
          type="button"
          onClick={() => {
            setCurrentMonth(() => value.setMonth(2))
          }}
        >
          {t("date.month_names.2")}
        </button>
      </h1>
      {(currentMonth === 2 || value.toDateString().slice(4, 7) === "Mar") && (
        <Calendar onChange={onChange} value={value} />
      )}
      <h1
        className={`${
          (currentMonth === 3 || value.toDateString().slice(4, 7) === "Apr") &&
          "text-sky"
        } py-3`}
      >
        <button
          type="button"
          onClick={() => {
            setCurrentMonth(() => value.setMonth(3))
          }}
        >
          {t("date.month_names.3")}
        </button>
      </h1>
      {(currentMonth === 3 || value.toDateString().slice(4, 7) === "Apr") && (
        <Calendar onChange={onChange} value={value} />
      )}
      <h1
        className={`${
          (currentMonth === 4 || value.toDateString().slice(4, 7) === "May") &&
          "text-sky"
        } py-3`}
      >
        <button
          type="button"
          onClick={() => {
            setCurrentMonth(() => value.setMonth(4))
          }}
        >
          {t("date.month_names.4")}
        </button>
      </h1>
      {(currentMonth === 4 || value.toDateString().slice(4, 7) === "May") && (
        <Calendar onChange={onChange} value={value} />
      )}
      <h1
        className={`${
          (currentMonth === 5 || value.toDateString().slice(4, 7) === "Jun") &&
          "text-sky"
        } py-3`}
      >
        <button
          type="button"
          onClick={() => {
            setCurrentMonth(() => value.setMonth(5))
          }}
        >
          {t("date.month_names.5")}
        </button>
      </h1>
      {(currentMonth === 5 || value.toDateString().slice(4, 7) === "Jun") && (
        <Calendar onChange={onChange} value={value} />
      )}
      <h1
        className={`${
          (currentMonth === 6 || value.toDateString().slice(4, 7) === "Jul") &&
          "text-sky"
        } py-3`}
      >
        <button
          type="button"
          onClick={() => {
            setCurrentMonth(() => value.setMonth(6))
          }}
        >
          {t("date.month_names.6")}
        </button>
      </h1>
      {(currentMonth === 6 || value.toDateString().slice(4, 7) === "Jul") && (
        <Calendar onChange={onChange} value={value} />
      )}
      <h1
        className={`${
          (currentMonth === 7 || value.toDateString().slice(4, 7) === "Aug") &&
          "text-sky"
        } py-3`}
      >
        <button
          type="button"
          onClick={() => {
            setCurrentMonth(() => value.setMonth(7))
          }}
        >
          {t("date.month_names.7")}
        </button>
      </h1>
      {(currentMonth === 7 || value.toDateString().slice(4, 7) === "Aug") && (
        <Calendar onChange={onChange} value={value} />
      )}
      <h1
        className={`${
          (currentMonth === 8 || value.toDateString().slice(4, 7) === "Sep") &&
          "text-sky"
        } py-3`}
      >
        <button
          type="button"
          onClick={() => {
            setCurrentMonth(() => value.setMonth(8))
          }}
        >
          {t("date.month_names.8")}
        </button>
      </h1>
      {(currentMonth === 8 || value.toDateString().slice(4, 7) === "Sep") && (
        <Calendar onChange={onChange} value={value} />
      )}
      <h1
        className={`${
          (currentMonth === 9 || value.toDateString().slice(4, 7) === "Oct") &&
          "text-sky"
        } py-3`}
      >
        <button
          type="button"
          onClick={() => {
            setCurrentMonth(() => value.setMonth(9))
          }}
        >
          {t("date.month_names.9")}
        </button>
      </h1>
      {(currentMonth === 9 || value.toDateString().slice(4, 7) === "Oct") && (
        <Calendar onChange={onChange} value={value} />
      )}
      <h1
        className={`${
          (currentMonth === 10 || value.toDateString().slice(4, 7) === "Nov") &&
          "text-sky"
        } py-3`}
      >
        <button
          type="button"
          onClick={() => {
            setCurrentMonth(() => value.setMonth(10))
          }}
        >
          {t("date.month_names.10")}
        </button>
      </h1>
      {(currentMonth === 10 || value.toDateString().slice(4, 7) === "Nov") && (
        <Calendar onChange={onChange} value={value} />
      )}
      <h1
        className={`${
          (currentMonth === 11 || value.toDateString().slice(4, 7) === "Dec") &&
          "text-sky"
        } py-3`}
      >
        <button
          type="button"
          onClick={() => {
            setCurrentMonth(() => value.setMonth(11))
          }}
        >
          {t("date.month_names.11")}
        </button>
      </h1>
      {(currentMonth === 11 || value.toDateString().slice(4, 7) === "Dec") && (
        <Calendar onChange={onChange} value={value} />
      )}
    </div>
  )
}

export default EventsContentLeft
