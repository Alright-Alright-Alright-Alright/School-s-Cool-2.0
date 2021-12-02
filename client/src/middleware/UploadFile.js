import axios from "axios"

const fileUploadHandler = async (selectedFile) => {
  const data = new FormData()
  data.append("theFile", selectedFile)

  const response =
    selectedFile !== "" &&
    (await axios.post(`${process.env.REACT_APP_API_URL}/file-upload`, data, {
      withCredentials: true,
    }))
  return selectedFile !== "" && response.data.secure_url
}

export default fileUploadHandler
