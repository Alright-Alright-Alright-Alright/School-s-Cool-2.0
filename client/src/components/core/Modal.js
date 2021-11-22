import React, { useState } from "react"
import { useDispatch } from "react-redux"
import fileUploadHandler from "../../middleware/UploadFile"
import { addAtopic } from "../../redux/actions/topicActions"
import Button from "./Button"
import SwitchButton from "./SwitchButton"

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
      className="h-72 w-full rounded-2xl bg-white flex flex-col justify-evenly absolute"
      onSubmit={handleFormSubmit}
    >
      <section className="flex justify-center">
        <input
          type="text"
          name=""
          id=""
          placeholder="Add your descriptive topic name"
          className="w-full"
          onChange={chooseTitle}
        />
      </section>
      <section className="flex justify-evenly">
        <select name="" id="" className=" bg-grey-super_light rounded-lg">
          <option value="">Category</option>
        </select>
        <select name="" id="" className=" bg-grey-super_light rounded-lg">
          <option value="">Subject</option>
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
          className="w-full"
          onChange={chooseDescription}
        />
      </section>
      <section className="flex justify-between px-5">
        <SwitchButton />
        <Button buttonName="Create Topic" buttonSubmit="submit" />
      </section>
    </form>
  )
}

export default Modal
