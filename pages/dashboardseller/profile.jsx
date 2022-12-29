import React from 'react'
import Navbar from '../../components/navbar/navbardash'
import Sidebar from '../../components/sidebarseller/sidebar2'
import Dashboard from '../../components/dashboard/poll'

export default function dashboard() {
  return (
      <>
          <div className=' bg-slate-300 h-screen w-screen overflow-y-scroll overscroll-y-none overscroll-x-none'>
              <div className='p-5 rounded-sm'>
                   <Navbar />
          <div className='flex flex-row overscroll-y-none'>
              <Sidebar />
          
<div className='w-full bg-white'>

<section  className=" bg-white flex w-2/5 justify-start font-medium m-8">

    <section className="w-64 mx-auto bg-slate-700 rounded-2xl px-8 py-6 shadow-md">
        
        
        <div className="mt-6 w-fit mx-auto">
            <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" className="rounded-full w-28 " alt="profile picture" srcset="">
       </img>
                                  </div>

        <div className="mt-8 ">
            <h2 className="text-white font-bold text-2xl tracking-wide">Jamal <br/> </h2>
        </div>
        <p className="text-emerald-400 font-semibold mt-2.5" >
            Active
        </p>

     
        

    </section>


</section></div>
      
              </div>
              </div>
         
              </div>
          
      </>
  )
}