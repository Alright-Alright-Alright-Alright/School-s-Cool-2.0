import axios from "axios"

class UserService {
  constructor() {
    const service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    })
    this.service = service
  }

  login = (loginUser) =>
    this.service.post("/login", loginUser).then((response) => response.data)

  register = (registerNewUser) =>
    this.service
      .post("/register", registerNewUser)
      .then((response) => response.data)

  loggedin = () =>
    this.service.get("/loggedin").then((response) => response.data)

  logout = () =>
    this.service.post("/logout", {}).then((response) => response.data)

  forgot = (email) =>
    this.service.post("/forgot", { email }).then((response) => response.data)

  newPassword = (password, token) =>
    this.service
      .post("/new-password", { password, token })
      .then((response) => response.data)
}

export default UserService
