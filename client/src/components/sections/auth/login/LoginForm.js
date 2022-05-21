/* eslint-disable jsx-a11y/label-has-associated-control */
import { t } from "i18next"
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import { loginUser } from "../../../../redux/actions/userActions"
import Button from "../../../core/Button"
import MessageHandler from "../../../core/MessageHandler"

const LoginForm = () => {
  const UI = useSelector((state) => state.UI)
  const user = useSelector((state) => state.user.singleUser)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userLogin = {
    email,
    password,
    remember,
  }

  const chooseEmail = (e) => {
    setEmail(e.target.value)
  }

  const choosePassword = (e) => {
    setPassword(e.target.value)
  }

  const rememberMe = () => {
    setRemember(!remember)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    dispatch(loginUser(userLogin))
  }

  useEffect(() => user && setTimeout(() => navigate("/home"), 1500), [user])

  const logo = (
    <svg
      width="175"
      height="40"
      viewBox="0 0 175 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 21H30.3651C35.5365 21 39.7287 25.1922 39.7287 30.3636C39.7287 35.535 35.5361 39.7272 30.3647 39.7272C25.1929 39.7272 21 35.5346 21 30.3628V21Z"
        fill="#F5A70F"
      />
      <path
        d="M21 18.7272V9.36433C21 4.19255 25.1929 -7.62939e-06 30.3647 -7.62939e-06C35.5361 -7.62939e-06 39.7287 4.19222 39.7287 9.36358C39.7287 14.5349 35.5365 18.7272 30.3651 18.7272H21Z"
        fill="#18C7BB"
      />
      <path
        d="M18.7286 18.7272V9.36434C18.7286 4.19255 14.5357 -7.62939e-06 9.36392 -7.62939e-06C4.19256 -7.62939e-06 -4.00543e-05 4.19222 -4.00543e-05 9.36358C-4.00543e-05 14.5349 4.19218 18.7272 9.36355 18.7272H18.7286Z"
        fill="#DE2F6E"
      />
      <path
        d="M18.7289 21.2727H9.36379C4.19243 21.2727 0.000204086 25.4649 0.000204086 30.6363C0.000204086 35.8077 4.1928 39.9999 9.36417 39.9999C14.5359 39.9999 18.7289 35.8073 18.7289 30.6355V21.2727Z"
        fill="#27A8DF"
      />
      <path
        d="M52.1853 9H57.3933L63.0328 21.2342H62.7246L68.364 9H73.3871V29H69.72V13.1911H70.2747L64.0497 26.812H61.6768L55.4827 13.2527H55.8217V29H52.1853V9Z"
        fill="#0F2331"
      />
      <path
        d="M79.7617 29L86.5722 9H91.1331L97.6662 29H93.845L92.4582 24.6857H85.0314L83.6138 29H79.7617ZM85.9559 21.943H91.5953L88.791 13.3451L85.9559 21.943Z"
        fill="#0F2331"
      />
      <path
        d="M115.626 9H120.619L107.429 22.4977V17.5362L115.626 9ZM111.189 17.2589L121.173 29H116.489L108.662 19.6317L111.189 17.2589ZM104.07 9H107.737V29H104.07V9Z"
        fill="#0F2331"
      />
      <path d="M130.7 9V25.8259H138.928V29H127.063V9H130.7Z" fill="#0F2331" />
      <path d="M145.121 29V9H148.757V29H145.121Z" fill="#0F2331" />
      <path
        d="M168.897 9H173.889L160.7 22.4977V17.5362L168.897 9ZM164.459 17.2589L174.444 29H169.76L161.932 19.6317L164.459 17.2589ZM157.341 9H161.008V29H157.341V9Z"
        fill="#0F2331"
      />
    </svg>
  )

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-screen h-screen flex items-center justify-center">
        <form
          onSubmit={handleFormSubmit}
          className="bg-white shadow-lg w-2/3 lg:w-1/5 h-96 rounded-2xl flex flex-col justify-around py-3"
        >
          <div className="flex justify-center">{logo}</div>
          <div className="lg:h-2/5 flex flex-col lg:px-8 px-5 justify-around">
            <label className="text-sm my-2">
              {t("auth.login_register_email")}:
            </label>
            <input
              type="email"
              name="email"
              checked={email}
              onChange={chooseEmail}
              className="bg-grey-super_light placeholder-grey-medium text-sm rounded-md p-2 mb-2"
              placeholder={t("auth.login_register_enter_email")}
            />

            <label className="text-sm my-2">
              {t("auth.login_register_password")}:{" "}
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={choosePassword}
              className="bg-grey-super_light placeholder-grey-medium text-sm rounded-md p-2"
              placeholder={t("auth.login_register_enter_password")}
            />
            <br />
            <div className="flex items-center space-x-1">
              <input type="checkbox" value={remember} onChange={rememberMe} />
              <label className="text-sm">Remember me</label>
            </div>
            <p className="text-sm flex justify-end">
              <Link to="/forgot">{t("auth.login_forgot_password")}</Link>
            </p>
          </div>
          <div className="flex justify-between lg:px-8 px-5">
            <Button
              buttonName="Log in"
              buttonSubmit
              buttonStyle="btnSecondaryStyle"
            />
            <Link to="/register">
              <Button
                buttonName={t("auth.login_register")}
                buttonSubmit
                buttonStyle="btnPrimaryStyle"
              />
            </Link>
          </div>
          {UI.errors && <MessageHandler error={UI.errors} />}
        </form>
      </div>
    </div>
  )
}

export default LoginForm
