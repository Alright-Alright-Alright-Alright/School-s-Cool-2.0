/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { registerUser } from "../../../redux/actions/userActions"

const RegisterForm = () => {
  const UI = useSelector((state) => state.UI)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const dispatch = useDispatch()

  //   useEffect(() => {
  //     dispatch(loginUser())
  //   }, [dispatch])

  //   const [error, setError] = useState("");

  const registerNewUser = {
    firstName,
    lastName,
    email,
    password,
  }

  const chooseEmail = (e) => {
    setEmail(e.target.value)
  }

  const choosePassword = (e) => {
    setPassword(e.target.value)
  }

  const chooseFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const chooseLastName = (e) => {
    setLastName(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    dispatch(registerUser(registerNewUser))
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={chooseFirstName}
        />

        <label>Last Name: </label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={chooseLastName}
        />

        <label>Email: </label>
        <input
          type="email"
          name="email"
          checked={email}
          onChange={chooseEmail}
        />

        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={choosePassword}
        />

        <input type="submit" value="submit" />
        <p>Errors: {UI.errors ? <p>{UI.errors.message}</p> : null}</p>
      </form>
    </>
  )
}

export default RegisterForm
