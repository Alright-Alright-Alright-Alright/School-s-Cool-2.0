/* eslint-disable react/prop-types */
import React, { useState, useRef } from "react"
import { useDispatch } from "react-redux"
import fileUploadHandler from "../../middleware/UploadFile"
import { addAtopic } from "../../redux/actions/topicActions"
import Button from "./Button"
import SwitchButton from "./SwitchButton"
import Icon from "./Icon"

const Modal = ({ handleShowModal, getTopicsFromDB }) => {
  const [title, seTitle] = useState("")
  const [description, setDescription] = useState("")
  const [bannerImage, setBannerImage] = useState("")
  const [privacy, setPrivacy] = useState(false)
  const hiddenFileInput = useRef(null)

  const dispatch = useDispatch()

  const handleClick = () => {
    hiddenFileInput.current.click()
  }

  const chooseTitle = (e) => {
    seTitle(e.target.value)
  }

  const chooseDescription = (e) => {
    setDescription(e.target.value)
  }

  const chooseBannerImage = (e) => {
    setBannerImage(e.target.files[0])
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const image = await fileUploadHandler(bannerImage)
    const topicData = {
      title,
      description,
      bannerImage: image,
      private: privacy,
    }
    handleShowModal()
    dispatch(addAtopic(topicData))
    await getTopicsFromDB()
  }

  return (
    <form
      className="h-72 w-5/7 rounded-2xl bg-white flex flex-col justify-evenly absolute inset-1/7 md:inset-y-1/4 shadow-xl"
      onSubmit={handleFormSubmit}
    >
      <section className="flex justify-between px-1 border-b-2 border-grey-super_light py-3 mx-5">
        <input
          type="text"
          name=""
          id=""
          placeholder="Add your descriptive topic name"
          className="w-2/3 placeholder-grey-medium text-lg"
          onChange={chooseTitle}
        />
        <button type="button" onClick={handleShowModal}>
          <Icon iconName="close" />
        </button>
      </section>
      <section className="flex justify-between border-b-2 border-grey-super_light px-1 py-3 mx-5">
        <select
          name=""
          id=""
          className="bg-grey-super_light rounded-lg  w-2/7 text-base py-3 pl-3"
        >
          <option value="">Choose a category</option>
          <option value="">Home Work</option>
          <option value="">Doubts</option>
        </select>
        <select
          name=""
          id=""
          className=" bg-grey-super_light rounded-lg  w-2/7 text-base py-2 pl-3 "
        >
          <option className="text-base" value="">
            Choose a subject
          </option>
          <option value="">Maths</option>
          <option value="">Literature</option>
        </select>
        <button
          type="button"
          onClick={handleClick}
          className="flex justify-around items-center w-2/7"
        >
          <span className="text-base">Add Cover Image</span>
          <Icon iconName="add" iconStyle="fill-inactive text-aqua" />
        </button>
        <input
          type="file"
          size="60"
          className="hidden"
          ref={hiddenFileInput}
          onChange={chooseBannerImage}
        />
      </section>
      <section className="flex justify-center border-b-2 border-grey-super_light px-1 py-3 mx-5">
        <input
          type="text"
          placeholder="Briefly explain what your topic is about"
          className="w-full placeholder-grey-medium text-base"
          onChange={chooseDescription}
        />
      </section>
      <section className="flex justify-between px-5">
        <SwitchButton
          nameLeft="PUBLIC"
          nameRight="PRIVATE"
          toogle={() => setPrivacy(!privacy)}
        />
        <Button
          buttonName="Create Topic"
          buttonStyle="btnTopicStyle"
          buttonSubmit
        />
      </section>
    </form>
  )
}

export default Modal
