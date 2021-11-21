import axios from "axios"

const fileUploadHandler = async (selectedFile) => {
  const data = new FormData()
  data.append("theFile", selectedFile)
  console.log(selectedFile)
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/file-upload`,
    data,
    {
      withCredentials: true,
    }
  )
  return response.data.secure_url
}

export default fileUploadHandler
