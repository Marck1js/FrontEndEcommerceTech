import React from 'react'
import DashboardMenu from '../components/DashboardMenu'
import AdminHeader from '../components/AdminHeader'


const AdminDashBoard = () => {
  return (
    <div className='max-w-6xl my-0 mx-auto flex'>
      <div className='w-[240px] h-screen inline-block'></div>
      <DashboardMenu />
      <main className='bg-gray-200 flex-1'>
        <AdminHeader/>  

      </main>
    </div>
  )
}

export default AdminDashBoard
