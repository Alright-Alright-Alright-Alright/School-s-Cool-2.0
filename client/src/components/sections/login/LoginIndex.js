import React from "react"
import Main from "../../layout/main"
import LoginForm from "./LoginForm"

function index() {
  return (
    <>
      <Main main={<LoginForm />} />
    </>
  )
}

export default index
