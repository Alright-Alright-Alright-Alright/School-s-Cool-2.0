/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react"
import { useDispatch } from "react-redux"
import Icon from "../../core/Icon"
import {
  iLikedAfile,
  iUnlikedAfile,
} from "../../../redux/actions/libraryActions"

// eslint-disable-next-line react/prop-types
const LibraryContentRight = ({ singleFile }) => {
  const dispatch = useDispatch()
  return singleFile !== null ? (
    <div className="flex flex-col w-3/4 h-3/5 bg-white shadow-xl rounded-3xl ml-12 mt-8">
      <div className="h-1/2 flex flex-col justify-around">
        <section className="mt-6 ml-8">
          <div className="flex items-center pb-4">
            <img
              src={singleFile.fileUrl}
              alt="file preview"
              className="w-1/4 h-1/5 rounded-md"
            />
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
        <hr className="ml-8 w-52 text-grey-light" />
        <section className="ml-8">
          <div>
            <p className="text-grey-medium font-semibold">
              {singleFile.category}: {singleFile.subject}
            </p>
          </div>
          <div className="ml-8">grade range</div>
          <div className="ml-8">#tags</div>
        </section>
        <hr className="ml-8 w-52 text-grey-light" />
        <section className="ml-8 flex">
          <div className="flex">
            {singleFile.likedBy.includes(singleFile.owner._id) ? (
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
            <span className="pl-1">{0}</span>
          </div>
        </section>
      </div>
      <hr className="ml-8 w-52 text-grey-light" />
      <div className="h-1/2">
        <section className="ml-8">comments</section>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center w-3/4 h-3/5 bg-white shadow-xl rounded-3xl ml-12 mt-8">
      <h1>Click on a file to see its details</h1>
    </div>
  )
}

export default LibraryContentRight