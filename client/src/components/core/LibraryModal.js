/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useRef } from "react"
import { useDispatch } from "react-redux"
import fileUploadHandler from "../../middleware/UploadFile"
import Button from "./Button"
import SwitchButton from "./SwitchButton"
import Icon from "./Icon"
import { addFileToLibrary } from "../../redux/actions/libraryActions"

const Modal = ({ handleShowModal, singleTopic }) => {
  const [title, seTitle] = useState("")
  const [category, setCategory] = useState("")
  const [subject, setSubject] = useState("")
  const [fileUrl, setFilUrl] = useState("")
  const [imgPreview, setImgPreview] = useState("")
  const [privacy, setPrivacy] = useState(false)
  const hiddenFileInput = useRef(null)

  const dispatch = useDispatch()

  const handleClick = () => {
    hiddenFileInput.current.click()
  }

  const handleImagePreview = async (img) => {
    const image = await fileUploadHandler(img)
    setImgPreview(image)
  }

  const chooseTitle = (e) => {
    seTitle(e.target.value)
  }

  const chooseBannerImage = async (e) => {
    setFilUrl(e.target.files[0])
    handleImagePreview(e.target.files[0])
  }

  const chooseCategory = (e) => {
    setCategory(e.target.value)
  }

  const chooseSubject = (e) => {
    setSubject(e.target.value)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const image = await fileUploadHandler(fileUrl)
    const fileData = {
      title,
      category: singleTopic ? singleTopic.category : category,
      subject: singleTopic ? singleTopic.subject : subject,
      fileUrl: image,
      isPrivate: privacy,
    }
    handleShowModal()
    dispatch(addFileToLibrary(fileData))
  }

  return (
    <div className="absolute inset-0 flex justify-center pt-28 z-50">
      <form
        className="h-72 w-6/8 rounded-2xl bg-white flex flex-col justify-evenly shadow-2xl"
        onSubmit={handleFormSubmit}
      >
        <section className="flex justify-between px-1 border-b-2 border-grey-super_light py-3 mx-5">
          <input
            type="text"
            name=""
            id=""
            placeholder="Add your file name"
            className="w-2/3 placeholder-grey-medium text-md"
            onChange={chooseTitle}
            required
          />
          <button type="button" onClick={handleShowModal}>
            <Icon iconName="close" />
          </button>
        </section>
        <section className="flex justify-between border-b-2 border-grey-super_light px-1 py-3 mx-5">
          {singleTopic ? (
            <div>
              <p className="text-sm">Category:</p>
              <p>{singleTopic.category}</p>
            </div>
          ) : (
            <select
              onChange={chooseCategory}
              name="category"
              id=""
              className="bg-grey-super_light rounded-lg  w-2/7 text-sm py-3 pl-3"
            >
              <option disabled selected>
                Choose a category
              </option>
              <option value="School work">School work</option>
              <option value="Sports">Sports</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Psychology">Psychology</option>
              <option value="Home work">Home work</option>
              <option value="Doubts">Doubts</option>
            </select>
          )}
          {singleTopic ? (
            <div>
              <p className="text-sm">Subject:</p>
              <p>{singleTopic.subject}</p>
            </div>
          ) : (
            <select
              onChange={chooseSubject}
              name="subject"
              id=""
              className=" bg-grey-super_light rounded-lg  w-2/7 text-sm py-2 pl-3 "
            >
              <option disabled selected>
                Choose a subject
              </option>
              <option value="Biology">Biology</option>
              <option value="Physics">Physics</option>
              <option value="Technology">Technology</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Literature">Literature</option>
              <option value="Football">Football</option>
            </select>
          )}
          <div className="flex justify-end items-center w-2/7">
            {imgPreview && (
              <img
                src={imgPreview}
                alt="Preview"
                className="w-10 h-10 rounded-sm mr-2"
              />
            )}
            <div>
              <button
                type="button"
                onClick={handleClick}
                className="flex items-center"
              >
                <span className="text-sm pr-3">
                  {imgPreview ? "File preview" : "Select your File"}
                </span>
                <Icon iconName="add" iconStyle="fill-inactive text-pink" />
              </button>
              <input
                type="file"
                name="file"
                size="60"
                className="hidden"
                ref={hiddenFileInput}
                onChange={chooseBannerImage}
                required
              />
            </div>
          </div>
        </section>
        <section className="flex justify-between px-5">
          <SwitchButton
            nameLeft="PUBLIC"
            nameRight="PRIVATE"
            toogle={() => setPrivacy(!privacy)}
          />
          <Button
            buttonName="Add a File"
            buttonStyle="btnLibraryStyle"
            buttonSubmit
          />
        </section>
      </form>
    </div>
  )
}

export default Modal
