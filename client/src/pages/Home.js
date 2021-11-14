import React from "react"
import NavBar from "../components/layout/NavBar"
// import Index from "../components/sections/register/Index"
// import RegisterIndex from "../components/sections/register/RegisterIndex"
// import TopicsTest from "./topicsTest/topicsTest"
import LoginIndex from "../components/sections/login/LoginIndex"

export default function Home() {
  return (
    <>
      <NavBar />
      {/* <RegisterIndex /> */}
      <LoginIndex />
    </>
  )
}
