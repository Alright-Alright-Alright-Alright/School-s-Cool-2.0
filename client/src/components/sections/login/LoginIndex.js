import React from "react"
import Main from "../../layout/main"
import LoginForm from "./LoginForm"

function index() {
  return (
    <div className="bg-white">
      <Main main={<LoginForm />} />
    </div>
  )
}

export default index
