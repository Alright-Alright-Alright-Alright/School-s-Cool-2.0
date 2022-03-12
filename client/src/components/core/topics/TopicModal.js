/* eslint-disable no-unused-expressions */
import React, { useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import fileUploadHandler from "../../../middleware/UploadFile"
import {
  addAtopic,
  editTopic,
  deleteTopic,
} from "../../../redux/actions/topicActions"
import MessageHandler from "../MessageHandler"
import Button from "../Button"
import SwitchButton from "../SwitchButton"
import Icon from "../Icon"

const Modal = ({ handleShowModal, editModal, singleTopic }) => {
  const [title, seTitle] = useState("")
  const [category, setCategory] = useState("")
  const [subject, setSubject] = useState("")
  const [description, setDescription] = useState("")
  const [bannerImage, setBannerImage] = useState("")
  const [privacy, setPrivacy] = useState(false)
  const hiddenFileInput = useRef(null)
  const UI = useSelector((state) => state.UI)
  const { topicId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { t } = useTranslation()

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

  const chooseCategory = (e) => {
    setCategory(e.target.value)
  }

  const chooseSubject = (e) => {
    setSubject(e.target.value)
  }

  const deleteTopicHandler = () => {
    dispatch(deleteTopic(topicId))
    navigate("/topics")
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const image = await fileUploadHandler(bannerImage)
    const topicData = {
      title:
        title ||
        (typeof singleTopic.title === "undefined" ? "" : singleTopic.title),
      description:
        description ||
        (typeof singleTopic?.description === "undefined"
          ? ""
          : singleTopic.description),
      category:
        category ||
        (typeof singleTopic?.category === "undefined"
          ? ""
          : singleTopic.category),
      subject:
        subject ||
        (typeof singleTopic?.subject === "undefined"
          ? ""
          : singleTopic.subject),
      bannerImage: image || singleTopic?.bannerImage,
      isPrivate:
        privacy ||
        (typeof singleTopic?.privacy === "undefined"
          ? false
          : singleTopic.privacy),
    }

    if (
      topicData.title.length > 0 &&
      topicData.description.length > 0 &&
      topicData.category.length > 0 &&
      topicData.subject.length > 0
    )
      handleShowModal()
    editModal
      ? dispatch(editTopic(topicId, topicData))
      : dispatch(addAtopic(topicData))
  }

  return (
    <div className="flex justify-center content-center">
      {singleTopic ? (
        <form
          className="h-72 w-2/6 rounded-2xl bg-white flex flex-col justify-evenly absolute z-50 top-60 shadow-xl"
          onSubmit={handleFormSubmit}
        >
          {UI.errors && <MessageHandler error={UI.errors} />}
          <section className="flex justify-between px-1 border-b-2 border-grey-super_light py-3 mx-5">
            <input
              type="text"
              defaultValue={singleTopic.title}
              placeholder={t("topics.modal_title_new_topic")}
              className="w-2/3 placeholder-grey-medium text-md"
              onChange={chooseTitle}
            />
            <button type="button" onClick={handleShowModal}>
              <Icon iconName="close" />
            </button>
          </section>
          <section className="flex justify-between border-b-2 border-grey-super_light px-1 py-3 mx-5">
            <select
              onChange={chooseCategory}
              defaultValue={singleTopic.category}
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
            <select
              onChange={chooseSubject}
              defaultValue={singleTopic.subject}
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
            <button
              type="button"
              onClick={handleClick}
              className="flex justify-around items-center w-2/7"
            >
              <span className="text-sm">Add Cover Image</span>
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
              className="w-full placeholder-grey-medium text-base h-10"
              onChange={chooseDescription}
              defaultValue={singleTopic.description}
            />
          </section>
          <section className="flex justify-between px-5">
            <SwitchButton
              nameLeft="PUBLIC"
              nameRight="PRIVATE"
              toogle={() => setPrivacy(!privacy)}
            />
            <Button
              buttonName={editModal ? "Edit Topic" : "Create Topic"}
              buttonStyle="btnTopicStyle"
              buttonSubmit
            />
          </section>
          <div>
            <button
              className="flex mx-5"
              type="button"
              onClick={deleteTopicHandler}
            >
              <Icon iconName="trash" /> Delete topic
            </button>
          </div>
        </form>
      ) : (
        <form
          className="h-72 w-2/6 rounded-2xl bg-white flex flex-col justify-evenly absolute z-50 top-60 shadow-xl"
          onSubmit={handleFormSubmit}
        >
          {UI.errors && <MessageHandler error={UI.errors} />}
          <section className="flex justify-between px-1 border-b-2 border-grey-super_light py-3 mx-5">
            <input
              required
              type="text"
              name=""
              id=""
              placeholder="Add your descriptive topic name"
              className="w-2/3 placeholder-grey-medium text-md"
              onChange={chooseTitle}
            />
            )
            <button type="button" onClick={handleShowModal}>
              <Icon iconName="close" />
            </button>
          </section>
          <section className="flex justify-between border-b-2 border-grey-super_light px-1 py-3 mx-5">
            <select
              onChange={chooseCategory}
              name=""
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
            <select
              onChange={chooseSubject}
              name=""
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
            <button
              type="button"
              onClick={handleClick}
              className="flex justify-around items-center w-2/7"
            >
              <span className="text-sm">Add Cover Image</span>
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
              className="w-full placeholder-grey-medium text-base h-10"
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
              buttonName={editModal ? "Edit Topic" : "Create Topic"}
              buttonStyle="btnTopicStyle"
              buttonSubmit
            />
          </section>
        </form>
      )}
    </div>
  )
}

Modal.propTypes = {
  editModal: PropTypes.bool.isRequired,
  handleShowModal: PropTypes.func.isRequired,
  singleTopic: PropTypes.shape.isRequired,
}

export default Modal
