import React from "react"
import Main from "../../layout/Main"
import AdminPanelMainContent from "./AdminPanelMainContent"

function AdminPanelIndex() {
  return (
    <>
      <Main main={<AdminPanelMainContent />} />
    </>
  )
}

export default AdminPanelIndex
