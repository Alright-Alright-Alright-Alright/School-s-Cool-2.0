/* eslint-disable dot-notation */
import { service, configHeaders } from "../api/axios"

export const login = (loginUser) =>
  service.post("/login", loginUser).then((response) => response.data)

export const register = (registerNewUser) =>
  service.post("/register", registerNewUser).then((response) => response.data)

export const loggedin = () =>
  service.get("/loggedin", configHeaders()).then((response) => response.data)

export const logout = () => {
  localStorage.removeItem("Authorization")
  service.post("/logout", {}).then((response) => response.data)
}

export const getAllUsers = () =>
  service.get("/users", configHeaders()).then((response) => response.data)

export const forgot = (email) =>
  service.post("/forgot", { email }).then((response) => response.data)

export const newPassword = (password, token) =>
  service
    .post("/new-password", { password, token })
    .then((response) => response.data)

export const updateUserService = (userData) =>
  service
    .put(`/profile/${userData.id}`, userData)
    .then((response) => response.data)
