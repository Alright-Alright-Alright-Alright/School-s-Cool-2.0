/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../../redux/actions/userActions"
import Button from "../../core/Button"

const LoginForm = () => {
  const UI = useSelector((state) => state.UI)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userLogin = {
    email,
    password,
  }

  const chooseEmail = (e) => {
    setEmail(e.target.value)
  }

  const choosePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    dispatch(loginUser(userLogin))
    setEmail("")
    setPassword("")
    setTimeout(() => {
      navigate("/")
    }, 1500)
  }

  return (
    <div className="bg-sky h-screen flex ">
      <div className="bg-grey-dark w-3/5 ">
        <form
          onSubmit={handleFormSubmit}
          className="bg-yellow flex flex-col h-2/5 rounded-2xl justify-center"
        >
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
          <Button buttonName="Log in" buttonSubmit />
          {UI.errors && <p>{UI.errors.message}</p>}
        </form>
      </div>
    </div>
  )
}

export default LoginForm
