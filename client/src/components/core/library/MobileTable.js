/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from "react"
import Icon from "../Icon"
import PdfFile from "../PdfFile"

const MobileTable = ({ library }) => (
  <div className="grid grid-cols-1 gap-3 md:hidden mr-4">
    {library.map((singleFile) => (
      <div className="flex flex-col bg-white shadow-xl rounded-3xl ml-12">
        <div className="flex flex-col justify-around">
          <section className="">
            <div className="flex items-center pb-4">
              {singleFile.fileUrl.includes("pdf") ? (
                <PdfFile pdf={singleFile.fileUrl} />
              ) : (
                <img
                  src={singleFile.fileUrl}
                  alt="file preview"
                  className="w-1/4 h-1/5 rounded-md"
                />
              )}
              <p className="pl-4 font-semibold text-lg">{singleFile.title}</p>
            </div>
            <div className="font-semibold items-center flex">
              <img
                src={singleFile.owner.imageUrl}
                alt="file preview"
                className="w-8 h-8 rounded-full"
              />
              <p className="pl-2 text-sm">
                {singleFile?.owner?.firstName} {singleFile?.owner?.lastName}
              </p>
            </div>
          </section>
          <hr className="ml-8 w-5/6 text-grey-light" />
          <section className="ml-8 h-1/4 flex flex-col justify-evenly">
            <div>
              <p className="text-grey-medium font-semibold">
                {singleFile.category}: {singleFile.subject}
              </p>
            </div>
            {/* <div className="text-sm">grade range</div> */}
            <div className="flex flex-wrap gap-1 justify-start">
              {singleFile.tags.map((tag) => (
                <span
                  key={tag}
                  className="mr-2 bg-grey-super_light rounded-full px-3 py-1 text-base text-grey-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
          <hr className="ml-8 w-5/6 text-grey-light" />
          <section className="ml-8 flex items-center">
            {/* <div className="flex">
                {singleFile.likedBy.includes(user._id) ? (
                  <button
                    type="button"
                    onClick={() => dispatch(iUnlikedAfile(singleFile._id))}
                  >
                    <Icon iconName="like" iconStyle="fill-active text-pink" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => dispatch(iLikedAfile(singleFile._id))}
                  >
                    <Icon iconName="like" iconStyle="fill-inactive" />
                  </button>
                )}
                <span className="pl-1">{singleFile.likedBy.length}</span>
              </div> */}
            {/* <div className="flex pl-4">
              <Icon iconName="message" iconStyle="fill-inactive" />
              <span className="pl-1">{singleFile.comments.length}</span>
            </div> */}
          </section>
        </div>
        <hr className="ml-8 w-5/6 text-grey-light" />
        <div className="h-2/5">
          <section className="ml-1 h-full flex flex-col">
            {/* <div className="h-3/4 overflow-y-auto scrollBar">
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
              </div> */}
          </section>
        </div>
      </div>
    ))}
  </div>
)

export default MobileTable
