/* eslint-disable react/prop-types */
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import fileUploadHandler from "../../middleware/UploadFile"
import { addAtopic } from "../../redux/actions/topicActions"
import Button from "./Button"
import SwitchButton from "./SwitchButton"
import Icon from "./Icon"

const Modal = ({ handleShowModal }) => {
  const [title, seTitle] = useState("")
  const [description, setDescription] = useState("")
  const [bannerImage, setBannerImage] = useState("")
  const [privacy, setPrivacy] = useState(false)

  const dispatch = useDispatch()

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
  }

  return (
    <form
      className="h-72 w-4/6 rounded-2xl bg-white flex flex-col justify-evenly absolute inset-40 md:inset-y-20 shadow-xl"
      onSubmit={handleFormSubmit}
    >
      <section className="flex justify-between px-5">
        <input
          type="text"
          name=""
          id=""
          placeholder="Add your descriptive topic name"
          className="w-2/3"
          onChange={chooseTitle}
        />
        <button type="button" onClick={handleShowModal}>
          <Icon iconName="close" />
        </button>
      </section>
      <section className="flex justify-around">
        <select name="" id="" className="bg-grey-super_light rounded-lg w-44">
          <option value="">Choose a category</option>
          <option value="">Home Work</option>
          <option value="">Doubts</option>
        </select>
        <select name="" id="" className=" bg-grey-super_light rounded-lg  w-44">
          <option value="">Choose a subject</option>
          <option value="">Maths</option>
          <option value="">Literature</option>
        </select>
        <input
          type="file"
          size="60"
          className="w-44"
          onChange={chooseBannerImage}
        />
      </section>
      <section className="flex justify-center px-5">
        <textarea
          placeholder="Briefly explain what your topic is about"
          className="w-full "
          onChange={chooseDescription}
        />
      </section>
      <section className="flex justify-between px-5">
        <button type="button" onClick={() => setPrivacy(!privacy)}>
          <SwitchButton />
        </button>
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
