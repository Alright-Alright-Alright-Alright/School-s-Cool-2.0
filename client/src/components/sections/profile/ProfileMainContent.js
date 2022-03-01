/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import PropTypes from "prop-types"
import { useParams } from "react-router-dom"
import Dashcard from "../../core/dashcard/Dashcard"
import { updateUser, getUserProfile } from "../../../redux/actions/userActions"
import Button from "../../core/Button"
import fileUploadHandler from "../../../middleware/UploadFile"
import dashcardDropdownMenu from "../../../data/dashcardDropdownMenu.json"

const truncate = (str) =>
  str?.length > 25 ? `${str.substring(0, 25)}...` : str

function ProfileMainContent({ userProfile, topics, courses, events, files }) {
  const [fileUrl, setFileUrl] = useState("")
  const [imagePreview, setImagePreview] = useState("")
  const [profileImage, setProfileImage] = useState(userProfile?.imageUrl)
  const [showEditForm, setShowEditForm] = useState(false)
  const { userId } = useParams()
  const hiddenFileInput = useRef(null)

  const user = useSelector((state) => state.user.singleUser)
  const userProfilePage = useSelector((state) => state.user.userProfile)
  const dispatch = useDispatch()

  const [firstName, setFirstName] = useState(user?.firstName)
  const [lastName, setLastName] = useState(user?.lastName)
  const [email, setEmail] = useState(user?.email)

  const filteredTopics = topics.filter((item) =>
    item.members.find((member) => member._id === user?._id)
  )

  const filteredEvents = events.filter((item) =>
    item.attendees.find((member) => member._id === user?._id)
  )

  const filteredFiles = files?.filter(
    (item) => item?.owner?._id === userProfile._id
  )

  useEffect(() => {
    dispatch(getUserProfile(userId))
  }, [dispatch, userId])

  const handleImagePreview = async (img) => {
    const image = await fileUploadHandler(img)
    setImagePreview(image)
    setProfileImage(image)
  }

  const chooseProfileImage = async (e) => {
    setFileUrl(e.target.files[0])
    handleImagePreview(e.target.files[0])
  }

  const handleClick = () => {
    hiddenFileInput.current.click()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const image = await fileUploadHandler(fileUrl)

    const userData = {
      id: user?._id,
      firstName,
      lastName,
      email,
      imageUrl: image,
    }
    dispatch(updateUser(userData))
    setShowEditForm(false)
  }

  return (
    <div className="flex flex-col items-center px-3">
      <img
        className="p-6 w-40 lg:w-80 h-40 lg:h-80 rounded-full object-cover"
        src={userProfilePage?.imageUrl}
        alt="profile"
      />
      {/* <img className="p-6 w-1/2 h-auto" src={imagePreview} alt="profile" /> */}
      <div className="flex">
        {userProfile?._id === user?._id ? (
          <div className="p-3">
            <Button
              buttonName="Edit Profile"
              buttonStyle="btnSecondaryStyle"
              onClick={() => {
                setShowEditForm(!showEditForm)
              }}
            />
          </div>
        ) : (
          <div className="p-3">
            <Button
              buttonName="Follow user"
              buttonStyle="btnPrimaryStyle"
              onClick={() => {
                console.log("follow user")
              }}
            />
          </div>
        )}
      </div>
      <div className="flex bg-white shadow-xl rounded-br-3xl rounded-bl-3xl rounded-tr-3xl m-3 p-6 w-full ">
        <div className="flex flex-col items-start w-1/2">
          <p className="border-b-2 border-grey-light w-full my-1">
            First name:
          </p>
          <p className="border-b-2 border-grey-light w-full my-1">Last name:</p>
          <p className="border-b-2 border-grey-light w-full my-1">E-mail:</p>
        </div>

        <div className="flex flex-col items-start pl-6 w-full">
          {showEditForm ? (
            <form onSubmit={handleSubmit}>
              <input
                className="border-b-2 border-grey-light w-full bg-grey-super_light rounded-xl pl-2 my-1"
                placeholder={user?.firstName}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="border-b-2 border-grey-light w-full bg-grey-super_light rounded-xl pl-2 my-1"
                placeholder={user?.lastName}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                className="border-b-2 border-grey-light w-full bg-grey-super_light rounded-xl pl-2 my-1"
                placeholder={user?.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div>
                <select
                  id="language"
                  name="language"
                  // onChange={handleEditFormChange}
                  // value={editFormData.role}
                  className="border-b-2 border-grey-light w-full bg-grey-super_light rounded-xl pl-2 my-1"
                >
                  <option value="en">English</option>
                  <option value="nl">Nederlands</option>
                </select>
              </div>
              <div className="flex justify-end items-center pt-3">
                <div className="">
                  <button
                    type="button"
                    onClick={handleClick}
                    className="flex items-center"
                  >
                    <span className="text-sm pr-3">
                      {imagePreview ? (
                        "File successfully uploaded"
                      ) : (
                        <Button
                          buttonName="Change Profile Picture"
                          buttonStyle="btnSecondaryStyle"
                        />
                      )}
                    </span>
                    {/* <Icon iconName="add" iconStyle="fill-inactive text-pink" /> */}
                  </button>
                  <input
                    type="file"
                    name="file"
                    size="60"
                    className="hidden"
                    ref={hiddenFileInput}
                    onChange={chooseProfileImage}
                    required
                  />
                </div>
                <Button
                  buttonName="Save changes"
                  buttonStyle="btnPrimaryStyle"
                  onClick={handleSubmit}
                />
              </div>
            </form>
          ) : (
            <>
              <p className="border-b-2 border-grey-light w-full pl-2 my-1">
                {userProfile?.firstName}
              </p>
              <p className="border-b-2 border-grey-light w-full pl-2 my-1">
                {userProfile?.lastName}
              </p>
              <p className="border-b-2 border-grey-light w-full pl-2 my-1">
                {truncate(userProfile?.email)}
              </p>
            </>
          )}
        </div>
      </div>

      <div className="flex-col w-full gap-6 ">
        <h1 className=" text-center text-lg">
          {`${userProfile?.firstName}'s`} activities
        </h1>
        <div className="block lg:flex gap-6">
          <div className="lg:w-1/2">
            <Dashcard
              dashCardData={filteredTopics}
              dashCardTitle="Topics"
              dashCardStyle="bg-aqua"
              dropdownMenuData={dashcardDropdownMenu.topics}
            />
          </div>
          <div className="lg:w-1/2">
            <Dashcard
              dashCardData={courses}
              dashCardTitle="Courses"
              dashCardStyle="bg-yellow"
              dropdownMenuData={dashcardDropdownMenu.courses}
            />
          </div>
        </div>
      </div>
      <div className="block lg:flex w-full gap-6 ">
        <div className="lg:w-1/2">
          <Dashcard
            dashCardData={filteredEvents}
            dashCardTitle="Events"
            dashCardStyle="bg-sky"
            dropdownMenuData={dashcardDropdownMenu.events}
          />
        </div>
        <div className="lg:w-1/2">
          <Dashcard
            dashCardData={filteredFiles}
            dashCardTitle="Files"
            dashCardStyle="bg-pink"
            dropdownMenuData={dashcardDropdownMenu.files}
          />
        </div>
      </div>
    </div>
  )
}

ProfileMainContent.defaultProps = {
  userProfile: {},
  topics: [],
  courses: [],
  events: [],
  files: [],
}

ProfileMainContent.propTypes = {
  userProfile: PropTypes.shape,
  topics: PropTypes.arrayOf,
  courses: PropTypes.arrayOf,
  events: PropTypes.arrayOf,
  files: PropTypes.arrayOf,
}

export default ProfileMainContent
