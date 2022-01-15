/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useState } from "react"
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
  const [tableRowClicked, setTableRowClicked] = useState([])
  const [selected, setSelected] = useState([])
  const dispatch = useDispatch()
  dayjs.extend(relativeTime)

  const downloadFiles = () => {
    selected.forEach((file) => {
      console.log(file)
      const response = {
        file,
      }
      window.location.href = response.file
    })
  }

  const selectedRow = (id) => {
    dispatch(getSingleFile(id))
    setTableRowClicked([id])
  }

  return (
    <div className={`w-full font-sans filter ${showModal && "blur-md"}`}>
      {selected.length > 0 && (
        <div className="flex justify-end mb-5 ">
          <button
            onClick={downloadFiles}
            type="button"
            className="border-2 rounded-full border-pink bg-pink text-white"
          >
            <p className="ml-5 mr-5 mt-2 mb-2 text-base">
              Download selected files
            </p>
          </button>
        </div>
      )}
      <table className="w-full ">
        <thead className="flex w-full">
          <tr className="flex text-left w-full">
            <th className="border-l-2 border-b-2 border-grey-medium_light pl-3 w-2/6">
              Name
            </th>
            <th className="border-l-2 border-b-2 border-grey-medium_light pl-3 w-1/6">
              Category
            </th>
            <th className="border-l-2 border-b-2 border-grey-medium_light pl-3 w-1/6">
              Date added
            </th>
            <th className="border-l-2 border-b-2 border-grey-medium_light pl-3 w-2/6">
              User
            </th>
          </tr>
        </thead>
        <tbody
          className="overflow-y-auto flex flex-col w-full scrollBar"
          style={{ height: "60vh" }}
        >
          {library.map((item, index) => (
            <tr
              key={item._id}
              onClick={() => selectedRow(item._id, index)}
              className={`h-16 border-b-2 border-grey-medium_light hover:bg-pink-light hover:shadow-md cursor-pointer flex items-center w-full ${
                tableRowClicked.includes(item._id) && "bg-pink-light"
              }`}
            >
              <td className="flex w-2/6 h-16 justify-start items-center pl-3">
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
              <td className="font-semibold pl-3 w-1/6">{item.category}</td>
              <td className="text-grey-medium_light pl-3 w-1/6">
                {dayjs(item.createdAt).fromNow()}
              </td>
              <td className="px-3 h-16 flex items-center w-2/6">
                <div className="flex items-center py-3 w-2/3">
                  <img
                    className="w-10 h-10 rounded-full mr-2"
                    src={`${item?.owner?.imageUrl}`}
                    alt="profile"
                  />
                  <p className="text-base font-semibold">
                    {item?.owner?.firstName} {item?.owner?.lastName}
                  </p>
                </div>
                <div className="flex justify-around items-center w-1/3">
                  <div className="w-1/2">
                    {selected?.includes(item.fileUrl) ? (
                      <button
                        type="button"
                        className="pt-1"
                        onClick={() =>
                          setSelected(() => {
                            const i = selected.indexOf(item.fileUrl)

                            if (i > -1) {
                              selected.splice(i, 1)
                            }
                            return selected
                          })
                        }
                      >
                        <Icon
                          iconName="follow"
                          iconStyle="fill-active text-pink"
                        />
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="pt-1"
                        onClick={() => setSelected([...selected, item.fileUrl])}
                      >
                        <Icon
                          iconName="follow"
                          iconStyle="fill-inactive text-pink"
                        />
                      </button>
                    )}
                  </div>
                  <div className="w-1/2">
                    <button
                      type="button"
                      className="pt-2"
                      onClick={() => dispatch(deleteFile(item._id))}
                    >
                      {user._id === item.owner._id && <Icon iconName="trash" />}
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default libraryItem
