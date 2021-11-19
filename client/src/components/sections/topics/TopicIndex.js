import React from "react"
import { Link, Outlet } from "react-router-dom"

export default function TopicIndex() {
  return (
    <main>
      <h2>Topics</h2>
      <Link
        style={{ display: "block", margin: "1rem 0" }}
        to="/topics/123"
        key="123"
      >
        Go to topic 123
      </Link>
      <Outlet />
    </main>
  )
}
