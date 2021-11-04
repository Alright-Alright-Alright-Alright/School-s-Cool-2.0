import React from "react"
import Main from "../../layout/main"
import DashCardsLeft from "./DashCardsLeft"
import DashCardsRight from "./DashCardsRight"

function index() {
  return (
    <>
      <Main
        main="Content Main"
        contentLeft={<DashCardsLeft />}
        contentRight={<DashCardsRight />}
      />
    </>
  )
}

export default index
