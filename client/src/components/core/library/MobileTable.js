/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from "react"
import { useDispatch } from "react-redux"
import Icon from "../Icon"
import PdfFile from "../PdfFile"
import Comment from "../comment/Comment"
import CommentFormLibrary from "../comment/CommentFormLibrary"
import {
  deleteFile,
  iUnlikedAfile,
  iLikedAfile,
} from "../../../redux/actions/libraryActions"

const MobileTable = ({ library, selected, setSelected, user }) => {
  const dispatch = useDispatch()
  return (
    <div className="grid grid-cols-1 gap-3 lg:hidden mx-6">
      {library().map((singleFile) => (
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
            <section className="w-1/2 flex justify-between flex-col">
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
              <hr className="ml-8 w-5/6 text-grey-light hidden md:block" />
              <div className="h-2/5 hidden md:block">
                <section className="ml-1 h-full flex flex-col">
                  <div className="h-3/4 overflow-y-auto scrollBar">
                    {singleFile.comments.length === 0 ? (
                      <p className="h-full text-grey-medium text-base flex items-center justify-center">
                        No comments yet on this file
                      </p>
                    ) : (
                      singleFile.comments.map((comment) => (
                        <Comment
                          comment={comment}
                          key={comment._id}
                          id={singleFile._id}
                        />
                      ))
                    )}
                  </div>
                  <div className="h-1/4 mb-2">
                    <CommentFormLibrary singleFile={singleFile} />
                  </div>
                </section>
              </div>
              <div className="flex justify-end space-x-1">
                <div>
                  {singleFile.likedBy.includes(user._id) ? (
                    <button
                      type="button"
                      className="pt-1"
                      onClick={() => dispatch(iUnlikedAfile(singleFile._id))}
                    >
                      <Icon iconName="like" iconStyle="fill-active text-pink" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="pt-1"
                      onClick={() => dispatch(iLikedAfile(singleFile._id))}
                    >
                      <Icon iconName="like" iconStyle="fill-inactive" />
                    </button>
                  )}
                </div>
                <div>
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
                <div>
                  <button
                    type="button"
                    className="pt-1"
                    onClick={() => dispatch(deleteFile(singleFile._id))}
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
