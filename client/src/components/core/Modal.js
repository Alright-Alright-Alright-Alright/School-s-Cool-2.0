import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addAtopic } from "../../redux/actions/topicActions"
import Button from "./Button"

const Modal = () => {
  const [title, seTitle] = useState("")
  const [description, setDescription] = useState("")
  const [bannerImage, setBannerImage] = useState("")

  const dispatch = useDispatch()

  const topicData = {
    title,
    description,
    bannerImage,
  }

  const chooseTitle = (e) => {
    seTitle(e.target.value)
  }

  const chooseDescription = (e) => {
    setDescription(e.target.value)
  }

  const chooseImageBanner = (e) => {
    setBannerImage(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    dispatch(addAtopic(topicData))
  }

  return (
    <form
      className="w-modal h-modal rounded-2xl bg-white flex flex-col justify-evenly"
      onSubmit={handleFormSubmit}
    >
      <section className="flex justify-center">
        <input
          type="text"
          name=""
          id=""
          placeholder="Add your descriptive topic name"
          className="w-modalTextInputs"
          onChange={chooseTitle}
        />
      </section>
      <section className="flex justify-evenly">
        <select
          name=""
          id=""
          className="w-modalSelect bg-grey-super_light rounded-lg"
        >
          <option value="">Category</option>
        </select>
        <select
          name=""
          id=""
          className="w-modalSelect bg-grey-super_light rounded-lg"
        >
          <option value="">Subject</option>
        </select>
        <input
          type="file"
          name=""
          id=""
          className="w-modalSelect"
          onChange={chooseImageBanner}
        />
      </section>
      <section className="flex justify-center">
        <textarea
          placeholder="Briefly explain what your topic is about"
          className="w-modalTextInputs"
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
