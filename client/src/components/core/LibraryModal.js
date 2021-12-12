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

const Modal = ({ handleShowModal }) => {
  const [title, seTitle] = useState("")
  const [category, setCategory] = useState("")
  const [subject, setSubject] = useState("")
  const [fileUrl, setFilUrl] = useState("")
  const [privacy, setPrivacy] = useState(false)
  const hiddenFileInput = useRef(null)

  const dispatch = useDispatch()

  const handleClick = () => {
    hiddenFileInput.current.click()
  }

  const chooseTitle = (e) => {
    seTitle(e.target.value)
  }

  const chooseBannerImage = (e) => {
    setFilUrl(e.target.files[0])
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
      category,
      subject,
      fileUrl: image,
      isPrivate: privacy,
    }
    handleShowModal()
    dispatch(addFileToLibrary(fileData))
  }

  return (
    <form
      className="h-72 w-3/5 rounded-2xl bg-white flex flex-col justify-evenly absolute z-50 inset-1/6 md:inset-y-1/4 shadow-xl"
      onSubmit={handleFormSubmit}
    >
      <section className="flex justify-between px-1 border-b-2 border-grey-super_light py-3 mx-5">
        <input
          type="text"
          name=""
          id=""
          placeholder="Add your file name"
          className="w-2/3 placeholder-grey-medium text-lg"
          onChange={chooseTitle}
        />
        <button type="button" onClick={handleShowModal}>
          <Icon iconName="close" />
        </button>
      </section>
      <section className="flex justify-between border-b-2 border-grey-super_light px-1 py-3 mx-5">
        <select
          onChange={chooseCategory}
          name=""
          id=""
          className="bg-grey-super_light rounded-lg  w-2/7 text-base py-3 pl-3"
        >
          <option className="text-base" disabled selected>
            Choose a category
          </option>
          <option value="School work">School work</option>
          <option value="Sports">Sports</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Psychology">Psychology</option>
          <option value="Home work">Home Work</option>
          <option value="Doubts">Doubts</option>
        </select>
        <select
          onChange={chooseSubject}
          name=""
          id=""
          className=" bg-grey-super_light rounded-lg  w-2/7 text-base py-2 pl-3 "
        >
          <option className="text-base" disabled selected>
            Choose a subject
          </option>
          <option value="Biology">Biology</option>
          <option value="Physics">Physics</option>
          <option value="Technology">Technology</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Literature">Literature</option>
          <option value="Football">Football</option>
        </select>
        <button
          type="button"
          onClick={handleClick}
          className="flex justify-around items-center w-2/7"
        >
          <span className="text-base">Select your File</span>
          <Icon iconName="add" iconStyle="fill-inactive text-pink" />
        </button>
        <input
          type="file"
          size="60"
          className="hidden"
          ref={hiddenFileInput}
          onChange={chooseBannerImage}
        />
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
  )
}

export default Modal
