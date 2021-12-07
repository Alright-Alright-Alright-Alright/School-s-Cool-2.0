/* eslint-disable dot-notation */
import axios from "axios"

const authToken = localStorage.getItem("Authorization")

const service = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: { Authorization: authToken },
})

export const login = (loginUser) =>
  service.post("/login", loginUser).then((response) => response.data)

export const register = (registerNewUser) =>
  service.post("/register", registerNewUser).then((response) => response.data)

export const loggedin = () =>
  service.get("/loggedin").then((response) => response.data)

export const logout = () => {
  localStorage.removeItem("Authorization")
  // delete axios.defaults.headers.common["Authorization"]
  service.post("/logout", {}).then((response) => response.data)
}

export const getAllUsers = () =>
  service.get("/users").then((response) => response.data)

export const forgot = (email) =>
  service.post("/forgot", { email }).then((response) => response.data)

export const newPassword = (password, token) =>
  service
    .post("/new-password", { password, token })
    .then((response) => response.data)
