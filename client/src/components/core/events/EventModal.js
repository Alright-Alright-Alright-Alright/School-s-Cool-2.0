/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import DatePicker from "react-datepicker"
import fileUploadHandler from "../../../middleware/UploadFile"
<<<<<<< HEAD
import {
  createNewEvent,
  getAllEvents,
} from "../../../redux/actions/eventActions"
=======
import { createNewEvent } from "../../../redux/actions/eventActions"
>>>>>>> dev
import Button from "../Button"
import SwitchButton from "../SwitchButton"
import Icon from "../Icon"
import "react-datepicker/dist/react-datepicker.css"
import MessageHandler from "../MessageHandler"

const Modal = ({ handleShowModal }) => {
  const [title, seTitle] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")
  const [bannerImage, setBannerImage] = useState("")
  const [privacy, setPrivacy] = useState(false)
  const [dateRange, setDateRange] = useState([null, null])
  const [startDate, endDate] = dateRange
  const hiddenFileInput = useRef(null)
  const UI = useSelector((state) => state.UI)

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

  const chooseLocation = (e) => {
    setLocation(e.target.value)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const image = await fileUploadHandler(bannerImage)
    const eventData = {
      title,
      description,
      dateStart: startDate,
      dateEnd: endDate === null && startDate,
      location,
      bannerImage: image,
      isPrivate: privacy,
    }
<<<<<<< HEAD
    dispatch(createNewEvent(eventData))
    dispatch(getAllEvents())
    handleShowModal()
=======
    if (eventData.title.length > 0 && eventData.location.length > 0)
      handleShowModal()
    dispatch(createNewEvent(eventData))
>>>>>>> dev
  }

  return (
    <div className="flex justify-center content-center">
      <form
        className="h-72 w-5/7 rounded-2xl bg-white flex flex-col justify-evenly absolute z-50 inset-1/7 md:inset-y-1/4 shadow-xl"
        onSubmit={handleFormSubmit}
      >
        {UI.errors && <MessageHandler error={UI.errors.data.message} />}
        <section className="flex justify-between px-1 border-b-2 border-grey-super_light py-3 mx-5">
          <input
            type="text"
            name=""
            id=""
            placeholder="Add your event name"
            className="w-2/3 placeholder-grey-medium text-md"
            onChange={chooseTitle}
          />
          <button type="button" onClick={handleShowModal}>
            <Icon iconName="close" />
          </button>
        </section>
        <section className="flex justify-between border-b-2 border-grey-super_light px-1 py-3 mx-5">
          <div>
            <DatePicker
              selectsRange
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => {
                setDateRange(update)
              }}
              placeholderText="Select event dates"
              withPortal
            />
          </div>
          <input
            type="text"
            placeholder="Select location"
            onChange={chooseLocation}
          />
          <button
            type="button"
            onClick={handleClick}
            className="flex justify-around items-center w-2/7"
          >
            <span className="text-sm">Add Cover Image</span>
            <Icon iconName="add" iconStyle="fill-inactive text-sky" />
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
            placeholder="Briefly explain what your event is about"
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
            buttonName="Create Event"
            buttonStyle="btnEventStyle"
            buttonSubmit
          />
        </section>
      </form>
    </div>
  )
}

export default Modal
