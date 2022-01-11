import { service, configHeaders } from "../redux/api/axios"

const fileUploadHandler = async (selectedFile) => {
  const data = new FormData()
  data.append("theFile", selectedFile)

  const response =
    selectedFile !== "" &&
    (await service.post(
      `/file-upload`,
      data,
      {
        withCredentials: true,
      },
      configHeaders()
    ))
  return selectedFile !== "" && response.data.secure_url
}

export default fileUploadHandler
