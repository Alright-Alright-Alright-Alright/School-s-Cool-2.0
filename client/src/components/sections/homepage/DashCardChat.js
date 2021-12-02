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

const dummyDataContacts = [
  {
    ContactName: "Jim",
  },
  {
    ContactName: "Jannet",
  },
  {
    ContactName: "Oscar",
  },
  {
    ContactName: "Valerie",
  },
  {
    ContactName: "Sara",
  },
]

function DashCardsChat() {
  return (
    <div>
      <Dashcard
        dashCardData={dummyData}
        dashCardTitle="Chat"
        dashCardStyle="bg-sky"
        dropdownMenuData={dashcardDropdownMenu.users}
        chat="false"
      />
    </div>
  )
}

function DashCardChatList() {
  return (
    <Dashcard
      dashCardData={dummyDataContacts}
      dashCardTitle="Chat"
      dashCardStyle="bg-sky"
      dropdownMenuData={dashcardDropdownMenu.users}
      chat="true"
    />
  )
}

export { DashCardsChat, DashCardChatList }
