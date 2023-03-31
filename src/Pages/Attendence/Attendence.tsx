import Header from '@Shared/Header/Header'
import Sidebar from '@Shared/Sidebar/Sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const Attendence = (props: Props) => {
  return (
    <div className="d-flex vh-100 border">
      <Sidebar />
      <div className="container-fluid d-flex flex-column ">
        <Header />
        <div className="vh-75">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Attendence