/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { t } from "i18next"
import Icon from "../../core/Icon"
import {
  iLikedAfile,
  iUnlikedAfile,
  getComments,
} from "../../../redux/actions/libraryActions"
import Comment from "../../core/comment/Comment"
import CommentFormLibrary from "../../core/comment/CommentFormLibrary"
import PdfFile from "../../core/PdfFile"

// eslint-disable-next-line react/prop-types
const LibraryContentRight = ({ singleFile }) => {
  const user = useSelector((state) => state.user.singleUser)
  const dispatch = useDispatch()

  useEffect(
    () => singleFile?._id && dispatch(getComments(singleFile?._id)),
    [dispatch, singleFile?._id]
  )

  return singleFile !== null ? (
    <div className="hidden flex-col w-5/6 h-4/6 bg-white shadow-xl rounded-3xl ml-12 mt-8 lg:block">
      <div className="h-3/5 flex flex-col justify-around">
        <section className="mt-6 ml-8">
          <div className="flex items-center pb-4">
            {singleFile.fileUrl.includes("pdf") ? (
              <PdfFile pdf={singleFile.fileUrl} />
            ) : (
              <img
                src={singleFile.fileUrl}
                alt="file preview"
                className="w-1/4 h-1/5 rounded-md object-cover"
              />
            )}
            <p className="pl-4 font-semibold text-lg">{singleFile.title}</p>
            <p className="text-md text-grey-medium_light italic">
              .
              {singleFile.fileUrl.slice(
                singleFile.fileUrl.length - 3,
                singleFile.fileUrl.length
              )}
            </p>
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
          <div className="flex">
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
          </div>
          <div className="flex pl-4">
            <Icon iconName="message" iconStyle="fill-inactive" />
            <span className="pl-1">{singleFile.comments.length}</span>
          </div>
        </section>
      </div>
      <hr className="ml-8 w-5/6 text-grey-light" />
      <div className="h-2/5">
        <section className="ml-1 h-full flex flex-col">
          <div className="h-3/4 overflow-y-auto scrollBar">
            {singleFile.comments.length === 0 ? (
              <p className="h-full text-grey-medium text-base flex items-center justify-center">
                {t("library.file_more_info_no_comments_placeholder")}
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
    </div>
  ) : (
    <div className="hidden w-3/4 h-3/5 bg-white shadow-xl rounded-3xl ml-12 mt-8 lg:block">
      <h1 className="h-full text-grey-dark font-semibold flex items-center justify-center text-center">
        {t("library.file_more_info_placeholder")}
      </h1>
    </div>
  )
}

export default LibraryContentRight
