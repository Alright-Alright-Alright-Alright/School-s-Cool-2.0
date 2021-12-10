/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React from "react"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import Icon from "../Icon"

const libraryItem = ({ library }) => {
  dayjs.extend(relativeTime)

  return (
    <div className="flex justify-center content-center bg- w-full">
      <table className="w-full border-solid border-2">
        <thead>
          <tr className="border-solid border-2">
            <th className="border-solid border-2">Name</th>
            <th className="border-solid border-2">Topic</th>
            <th className="border-solid border-2">Date added</th>
            <th className="border-solid border-2">User</th>
          </tr>
        </thead>
        {library.map((item) => (
          <tbody key={item._id} className="border-solid border-2">
            <tr className="h-16">
              <td className="flex flex-col h-16">
                <span>{item.fileName}</span>
                <span> {item.subject}</span>
              </td>
              <td>{item.category}</td>
              <td>{dayjs(item.createdAt).fromNow()}</td>
              <td className="h-16 flex justify-evenly content-center">
                <span>
                  {item.owner.firstName} {item.owner.lastName}
                </span>
                <Icon iconName="like" iconStyle="fill-inactive" />
                <Icon iconName="message" iconStyle="fill-inactive" />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}

export default libraryItem
