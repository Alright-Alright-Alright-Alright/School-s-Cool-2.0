import React from "react"
import Main from "../../layout/main"
import RegisterForm from "./RegisterForm"

function index() {
  return (
    <>
      <Main main={<RegisterForm />} />
    </>
  )
}

export default index
