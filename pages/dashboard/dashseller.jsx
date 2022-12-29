import React from 'react'
import Navbar from '../../components/navbar/navbardash'
import Sidebar from '../../components/sidebar/sidebar3'
import Dashboard from '../../components/dashboard/sellers'

export default function dashdish() {
  return (
      <>
          <div className=' bg-slate-300 h-screen w-screen overflow-y-scroll overscroll-y-none overscroll-x-none'>
              <div className='p-5 rounded-sm'>
                   <Navbar />
          <div className='flex flex-row overscroll-y-none'>
              <Sidebar />
          <Dashboard />
              </div>
              </div>
         
              </div>
          
      </>
  )
}
