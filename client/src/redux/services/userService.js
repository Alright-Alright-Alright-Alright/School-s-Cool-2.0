/* eslint-disable dot-notation */
import { service, setHeaders } from "../api/axios"

export const login = (loginUser) =>
  service
    .post("/login", loginUser, setHeaders())
    .then((response) => response.data)

export const register = (registerNewUser) =>
  service.post("/register", registerNewUser).then((response) => response.data)

export const loggedin = () =>
  service.get("/loggedin").then((response) => response.data)

export const logout = () => {
  localStorage.removeItem("Authorization")
  service.post("/logout", {}).then((response) => response.data)
}

export const getAllUsers = () =>
  service.get("/users", setHeaders()).then((response) => response.data)

export const forgot = (email) =>
  service.post("/forgot", { email }).then((response) => response.data)

export const newPassword = (password, token) =>
  service
    .post("/new-password", { password, token })
    .then((response) => response.data)
