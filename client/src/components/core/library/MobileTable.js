/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState } from "react"
import { useSelector } from "react-redux"
import Icon from "../Icon"
import PdfFile from "../PdfFile"

const MobileTable = ({ library, downloadFiles }) => {
  const [selected, setSelected] = useState([])
  const user = useSelector((state) => state.user.singleUser)
  return (
    <div className="grid grid-cols-1 gap-3 md:hidden mx-6">
      {library.map((singleFile) => (
        <div className="bg-white shadow-xl rounded-3xl">
          <div className="flex justify-around p-4">
            <section className="w-1/2">
              <div className="flex flex-col justify-around">
                {singleFile.fileUrl.includes("pdf") ? (
                  <PdfFile pdf={singleFile.fileUrl} />
                ) : (
                  <img
                    src={singleFile.fileUrl}
                    alt="file preview"
                    className="rounded-md "
                  />
                )}
                <p className="font-semibold text-lg py-2">{singleFile.title}</p>
              </div>
              <div className="font-semibold items-center flex">
                <img
                  src={singleFile.owner.imageUrl}
                  alt="file preview"
                  className="w-8 h-8 rounded-full"
                />
                <p className="pl-1 text-sm">
                  {singleFile?.owner?.firstName} {singleFile?.owner?.lastName}
                </p>
              </div>
            </section>
            <section className="w-1/2 flex justify-evenly flex-col">
              <div>
                <p className="text-grey-medium font-semibold text-center">
                  {singleFile.category}: {singleFile.subject}
                </p>
              </div>
              <div className="flex flex-wrap justify-center">
                {singleFile.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mr-2 bg-grey-super_light rounded-full px-3 py-1 text-base text-grey-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-around items-center w-1/3">
                <div className="w-1/2">
                  {selected?.includes(singleFile.fileUrl) ? (
                    <button
                      type="button"
                      className="pt-1"
                      onClick={() =>
                        setSelected(() => {
                          const i = selected.indexOf(singleFile.fileUrl)

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
                      onClick={() =>
                        setSelected([...selected, singleFile.fileUrl])
                      }
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
                    {user._id === singleFile.owner._id && (
                      <Icon iconName="trash" />
                    )}
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MobileTable
