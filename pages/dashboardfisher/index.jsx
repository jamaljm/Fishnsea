import React from 'react'
import Navbar from '../../components/navbar/navbardash'
import Sidebar from '../../components/sidebarseller copy/sidebar'
import Dashboard from '../../components/dashboardfisher/dashboard'

export default function dashboard() {

    
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
