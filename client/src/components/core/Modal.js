import React, { useState } from "react"
import { useDispatch } from "react-redux"
import fileUploadHandler from "../../middleware/UploadFile"
import { addAtopic } from "../../redux/actions/topicActions"
import Button from "./Button"
import SwitchButton from "./SwitchButton"
import Icon from "./Icon"

const Modal = () => {
  const [title, seTitle] = useState("")
  const [description, setDescription] = useState("")
  const [bannerImage, setBannerImage] = useState("")

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
    }

    dispatch(addAtopic(topicData))
  }

  return (
    <form
      className="h-72 w-4/5 rounded-2xl bg-white flex flex-col justify-evenly absolute inset-20 md:inset-y-20"
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
        <Icon iconName="close" />
      </section>
      <section className="flex justify-evenly">
        <select name="" id="" className=" bg-grey-super_light rounded-lg w-48">
          <option value="">Category</option>
          <option value="">Home Work</option>
          <option value="">Doubts</option>
        </select>
        <select name="" id="" className=" bg-grey-super_light rounded-lg  w-48">
          <option value="">Subject</option>
          <option value="">Maths</option>
          <option value="">Literature</option>
        </select>
        <input
          type="file"
          name=""
          id=""
          className=""
          onChange={chooseBannerImage}
        />
      </section>
      <section className="flex justify-center">
        <textarea
          placeholder="Briefly explain what your topic is about"
          className="w-full px-5"
          onChange={chooseDescription}
        />
      </section>
      <section className="flex justify-between px-5">
        <SwitchButton />
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
