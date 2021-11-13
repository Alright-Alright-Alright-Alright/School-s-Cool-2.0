/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { registerUser } from "../../../redux/actions/userActions"
import Button from "../../core/Button"

const RegisterForm = () => {
  const UI = useSelector((state) => state.UI)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const dispatch = useDispatch()

  const registerNewUser = {
    firstName,
    lastName,
    email,
    password,
  }

  const chooseFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const chooseLastName = (e) => {
    setLastName(e.target.value)
  }

  const chooseEmail = (e) => {
    setEmail(e.target.value)
  }

  const choosePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    dispatch(registerUser(registerNewUser))
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
  }

  return (
    <div className="flex justify-center h-screen">
      <div className="rounded-bl-2xl rounded-br-2xl rounded-r-2xl bg-white shadow-lg m-3 w-80">
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col m-3 justify-center"
        >
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={chooseFirstName}
            className="bg-grey-super_light rounded-full my-2"
          />

          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={chooseLastName}
            className="bg-grey-super_light rounded-full my-2"
          />

          <label>Email: </label>
          <input
            type="email"
            name="email"
            checked={email}
            onChange={chooseEmail}
            className="bg-grey-super_light rounded-full my-2"
          />

          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={choosePassword}
            className="bg-grey-super_light rounded-full my-2"
            required
          />
          <input type="submit" value="submit" className=" my-5 rounded-full" />
          {UI.errors && <p>{UI.errors.message}</p>}
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
