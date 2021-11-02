import axios from "axios"

class TopicService {
  constructor() {
    const service = axios.create({
      baseURL: "http://localhost:5000/api",
      withCredentials: true,
    })
    this.service = service
  }

  getAllTopics = () => {
    this.service.get("/topics").then((response) => response.data)
  }
}

export default TopicService
