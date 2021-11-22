import React, { useState } from "react"
import { useDispatch } from "react-redux"
import fileUploadHandler from "../../middleware/UploadFile"
import { addAtopic } from "../../redux/actions/topicActions"
import Button from "./Button"

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
      className="rounded-2xl bg-white flex flex-col justify-evenly"
      onSubmit={handleFormSubmit}
    >
      <section className="flex justify-center">
        <input
          type="text"
          name=""
          id=""
          placeholder="Add your descriptive topic name"
          className=""
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
          className=""
          onChange={chooseDescription}
        />
      </section>
      <section className="flex justify-around">
        <select name="" id="">
          <option value="">Public</option>
          <option value="">Private</option>
        </select>
        <Button buttonName="Create Topic" buttonSubmit="submit" />
      </section>
    </form>
  )
}

export default Modal
