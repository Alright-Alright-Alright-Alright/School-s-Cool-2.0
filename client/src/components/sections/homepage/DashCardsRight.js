import React from "react"
import Dashcard from "../../core/dashcard/Dashcard"
import dashcardDropdownMenu from "../../../data/dashcardDropdownMenu.json"

const dummyData = [
  {
    id: "1",
    title: "test",
    comment: ["1", "2", "3"],
    user: ["1", "2", "3"],
  },
  { title: "test2", comment: ["1"], user: ["1", "2", "3"] },
  {
    id: "2",
    title: "test3",
    date: "02-01-2021",
    comment: [["1", "2"]],
    user: ["1", "2", "3"],
  },
  { title: "test4", comment: [["1", "2"]], user: ["1", "2", "3"] },
  {
    id: "3",
    title: "test5",
    date: "02-01-2021",
    comment: [["1", "2"]],
    user: ["1", "2", "3"],
  },
  {
    id: "4",
    title: "test6",
    comment: [["1", "2"]],
    user: ["1", "2", "3"],
  },
]

function DashCardsRight() {
  return (
    <div>
      <Dashcard
        dashCardData={dummyData}
        dashCardTitle="Testing"
        dashCardStyle="bg-pink"
        dropdownMenuData={dashcardDropdownMenu.users}
      />
      <Dashcard
        dashCardData={dummyData}
        dashCardTitle="Blah Blah"
        dashCardStyle="bg-grey-medium"
        dropdownMenuData={dashcardDropdownMenu.users}
        chat
      />
      <Dashcard
        dashCardData={dummyData}
        dashCardTitle="Testing"
        dashCardStyle="bg-pink"
        dropdownMenuData={dashcardDropdownMenu.users}
      />
    </div>
  )
}

export default DashCardsRight
