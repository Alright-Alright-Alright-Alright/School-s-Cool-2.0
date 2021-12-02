/* eslint-disable dot-notation */
import axios from "axios"

const authToken = localStorage.getItem("Authorization")

class UserService {
  constructor() {
    const service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    })
    this.service = service
    service.defaults.headers.common["Authorization"] = authToken
  }

  login = (loginUser) =>
    this.service.post("/login", loginUser).then((response) => response.data)

  register = (registerNewUser) =>
    this.service
      .post("/register", registerNewUser)
      .then((response) => response.data)

  loggedin = () =>
    this.service.get("/loggedin").then((response) => response.data)

  logout = () => {
    localStorage.removeItem("Authorization")
    // delete axios.defaults.headers.common["Authorization"]
    this.service.post("/logout", {}).then((response) => response.data)
  }

  getAllUsers = () =>
    this.service.get("/users").then((response) => response.data)

  forgot = (email) =>
    this.service.post("/forgot", { email }).then((response) => response.data)

  newPassword = (password, token) =>
    this.service
      .post("/new-password", { password, token })
      .then((response) => response.data)
}

export default UserService
