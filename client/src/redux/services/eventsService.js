/* eslint-disable dot-notation */
import axios from "axios"

// const authToken = localStorage.getItem("Authorization")

class EventService {
  constructor() {
    const service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    })

    this.service = service
    // service.defaults.headers.common["Authorization"] = authToken
  }

  getAllEvents = () => {
    this.service.get("/events").then((response) => response.data)
  }
}

export default EventService
