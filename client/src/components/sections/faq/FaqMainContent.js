import React from "react"
import Accordion from "../../core/Accordion"

const accordionData = [
  {
    title: "What is the purpose of this website?",
    content:
      "This website is for people who want to create a community for their own events. It is a place where people can share their events with other people and also can find other events that they are interested in.",
  },
  {
    title: "How can I create an event?",
    content:
      "You can create an event by clicking on the 'Create Event' button on the top right corner of the screen. You can also create an event by clicking on the 'Create Event' button on the top right corner of the screen. You can also create an event by clicking on the 'Create Event' button on the top right corner of the screen.",
  },
  {
    title: "How can I join an event?",
    content:
      "You can join an event by clicking on the 'Join Event' button on the top right corner of the screen. You can also join an event by clicking on the 'Join Event' button on the top right corner of the screen. You can also join an event by clicking on the 'Join Event' button on the top right corner of the screen.",
  },
  {
    title: "How can I create an event?",
    content:
      "You can create an event by clicking on the 'Create Event' button on the top right corner of the screen. You can also create an event by clicking on the 'Create Event' button on the top right corner of the screen. You can also create an event by clicking on the 'Create Event' button on the top right corner of the screen.",
  },
  {
    title: "How can I join an event?",
    content:
      "You can join an event by clicking on the 'Join Event' button on the top right corner of the screen. You can also join an event by clicking on the 'Join Event' button on the top right corner of the screen. You can also join an event by clicking on the 'Join Event' button on the top right corner of the screen.",
  },
  {
    title: "How can I create an event?",
    content:
      "You can create an event by clicking on the 'Create Event' button on the top right corner of the screen. You can also create an event by clicking on the 'Create Event' button on the top right corner of the screen. You can also create an event by clicking on the 'Create Event' button on the top right corner of the screen.",
  },
]

function FaqMainContent() {
  return (
    <div>
      <div>
        <h1 className=" text-xl text-center p-3">Frequently Asked Questions</h1>
      </div>
      {accordionData.map(({ title, content }) => (
        <Accordion title={title} content={content} />
      ))}
    </div>
  )
}

export default FaqMainContent
