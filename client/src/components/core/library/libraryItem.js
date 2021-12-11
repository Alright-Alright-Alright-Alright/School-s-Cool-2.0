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
    <div className="w-full font-sans">
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th className="border-l-2 border-b-2 border-grey-medium_light pl-3">
              Name
            </th>
            <th className="border-l-2 border-b-2 border-grey-medium_light pl-3">
              Category
            </th>
            <th className="border-l-2 border-b-2 border-grey-medium_light pl-3">
              Date added
            </th>
            <th className="border-l-2 border-b-2 border-grey-medium_light pl-3">
              User
            </th>
          </tr>
        </thead>
        {library.map((item) => (
          <tbody key={item._id}>
            <tr className="h-16 border-b-2 border-grey-medium_light hover:bg-pink-light">
              <td className="flex h-16 justify-start items-center pl-3">
                <div>
                  {item?.fileUrl?.includes("pdf") ? (
                    <Icon iconName="pdf" iconStyle="fill-inactive" />
                  ) : (
                    <Icon iconName="jpg" iconStyle="fill-inactive" />
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">{item.title}</span>
                  <span className="text-sm text-grey-medium_light">
                    {item.subject}
                  </span>
                </div>
              </td>
              <td className="font-semibold pl-3">{item.category}</td>
              <td className=" text-grey-medium_light pl-3">
                {dayjs(item.createdAt).fromNow()}
              </td>
              <td className="h-16 flex items-center justify-around">
                <div className="flex items-center py-3">
                  <img
                    className="w-10 h-10 rounded-full mr-2"
                    src={`${item?.owner?.imageUrl}`}
                    alt="profile"
                  />
                  <p className="text-base font-semibold">
                    {item?.owner?.firstName} {item?.owner?.lastName}
                  </p>
                </div>
                <Icon iconName="like" iconStyle="fill-inactive" />
                <Icon iconName="message" iconStyle="fill-inactive" />
                <a href={item?.fileUrl}>
                  <Icon iconName="download" />
                </a>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}

export default libraryItem
