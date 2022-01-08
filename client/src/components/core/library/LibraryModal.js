/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import fileUploadHandler from "../../../middleware/UploadFile"
import Button from "../Button"
import SwitchButton from "../SwitchButton"
import Icon from "../Icon"
import { addFileToLibrary } from "../../../redux/actions/libraryActions"
import { getAlltopics } from "../../../redux/actions/topicActions"
import TagsInput from "../TagsInput"

const Modal = ({ handleShowModal, singleTopic }) => {
  const [title, seTitle] = useState("")
  const [category, setCategory] = useState("")
  const [subject, setSubject] = useState("")
  const [fileUrl, setFilUrl] = useState("")
  const [imgPreview, setImgPreview] = useState("")
  const [privacy, setPrivacy] = useState(false)
  const [tags, setTags] = useState([])
  const hiddenFileInput = useRef(null)
  const topics = useSelector((state) => state.topics.allTopics)
  const selectedTags = (tagsFromInput) => setTags(tagsFromInput)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAlltopics())
  }, [dispatch])

  const filterCategory = () => {
    const arr = []
    topics.map(
      (item) => arr.indexOf(item.category) === -1 && arr.push(item.category)
    )
    return arr
  }

  const findFunction = (cat) => topics.filter((topic) => topic.category === cat)

  const filterSubject = (cat) => {
    const arr = []
    findFunction(cat).map(
      (item) => arr.indexOf(item.subject) === -1 && arr.push(item.subject)
    )
    return arr
  }

  const fileType = () => {
    if (imgPreview.includes("pdf")) {
      return <Icon iconName="pdf" viewbox="0 0 22 22" />
    }
    if (imgPreview.includes("jpg")) {
      return <Icon iconName="jpg" viewbox="0 0 22 22" />
    }
  }

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
    console.log(tags)
    e.preventDefault()
    const image = await fileUploadHandler(fileUrl)
    const fileData = {
      title,
      category: singleTopic ? singleTopic.category : category,
      subject: singleTopic ? singleTopic.subject : subject,
      fileUrl: image,
      isPrivate: privacy,
      tags,
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
        <section>
          <TagsInput selectedTags={selectedTags} />
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
              {filterCategory().map((cat) => (
                <option value={cat}>{cat}</option>
              ))}
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
              {filterSubject(category).map((sub) => (
                <option value={sub}>{sub}</option>
              ))}
            </select>
          )}
          <div className="flex justify-end items-center w-2/7">
            {imgPreview && fileType()}
            <div>
              <button
                type="button"
                onClick={handleClick}
                className="flex items-center"
              >
                <span className="text-sm pr-3">
                  {imgPreview ? "File type" : "Select your File"}
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
