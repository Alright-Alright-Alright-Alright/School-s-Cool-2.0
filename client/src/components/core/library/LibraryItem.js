/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import Icon from "../Icon"
import {
  deleteFile,
  getSingleFile,
} from "../../../redux/actions/libraryActions"

const libraryItem = ({ library, showModal }) => {
  const user = useSelector((state) => state.user.singleUser)
  const dispatch = useDispatch()
  dayjs.extend(relativeTime)

  return (
    <div className={`w-full font-sans filter ${showModal && "blur-md"}`}>
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
            <tr
              onClick={() => dispatch(getSingleFile(item._id))}
              className="h-16 border-b-2 border-grey-medium_light hover:bg-pink-light hover:shadow-md cursor-pointer"
            >
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
              <td className="text-grey-medium_light pl-3">
                {dayjs(item.createdAt).fromNow()}
              </td>
              <td className="h-16 flex items-center justify-around pr-3">
                <div className="flex items-center py-3">
                  <img
                    className="w-10 h-10 rounded-full mr-2"
                    src={`${item?.owner?.imageUrl}`}
                    alt="profile"
                  />
                  <p className="text-base font-semibold">
                    {item?.owner?.firstName} {item?.owner?.lastName}
                  </p>
                </div>{" "}
              </td>
              <td className="border-t-2 border-grey-medium_light" />

              <td className="border-t-2 border-grey-medium_light">
                <button type="button" className="pt-1">
                  <Icon iconName="follow" iconStyle="fill-inactive text-pink" />
                </button>
              </td>
              <td className="border-t-2 border-grey-medium_light">
                <button
                  type="button"
                  className="pt-2"
                  onClick={() => dispatch(deleteFile(item._id))}
                >
                  <Icon iconName="trash" />
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}

export default libraryItem
