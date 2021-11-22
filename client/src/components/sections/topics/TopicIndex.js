import React from "react"
import { Link, Outlet } from "react-router-dom"

export default function TopicIndex() {
  return (
    <main>
      <h2>Topics</h2>
      <Link
        style={{ display: "block", margin: "1rem 0" }}
        to="/topics/619419a06ae0dc828aecc5f6"
        key="619419a06ae0dc828aecc5f6"
      >
        Go to topic 619419a06ae0dc828aecc5f6
      </Link>
      <Outlet />
    </main>
  )
}
