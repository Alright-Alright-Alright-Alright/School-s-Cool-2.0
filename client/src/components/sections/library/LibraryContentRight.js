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
        <section className="mt-8 ml-8">
          <div className="flex items-center">
            <img
              src={singleFile.fileUrl}
              alt="file preview"
              className="w-24 h-20 rounded-md"
            />
            <p className="pl-4">{singleFile.title}</p>
          </div>
          <p>
            {singleFile?.owner?.firstName} {singleFile?.owner?.lastName}
          </p>
        </section>

        <section className="ml-8">
          <div>
            {singleFile.category}: {singleFile.subject}
          </div>
          <div className="ml-8">grade range</div>
          <div className="ml-8">#tags</div>
        </section>
        <section className="ml-8">
          <div className="flex">
            {singleFile.likedBy.includes(singleFile.owner._id) ? (
              <button
                type="button"
                onClick={() => dispatch(iUnlikedAfile(singleFile._id))}
              >
                <Icon iconName="like" iconStyle="fill-active" />
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
        </section>
      </div>
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
