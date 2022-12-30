import React from 'react'
import Navbar from '../../components/navbar/navbardash'
import Sidebar from '../../components/sidebarseller/sidebar1'
import Dashboard from '../../components/dashboard/poll'

export default function dashboard() {

    const products = [
    { title: "Anchovy", src:'/images/f1.jpg', id: 10 },
    { title: "Mackerel", src:'/images/f2.jpg', id: 8 },
    { title: "Katla", src:'/images/f3.jpg', id: 6.5 },
    { title: "Squid", src:'/images/f4.jpg', id: 4.7},
    { title: "Seer fish", src:'/images/f5.jpg', id: 3 },
  ];

  const listOfProducts = products.map((products) => (
    <li class="py-3 sm:py-4">
    <div class="flex items-center justify-between space-x-4">
        <div className='flex items-center'>
        <div class="flex-shrink-0">
            <img class="w-8 h-8 rounded-full" src={products.src} alt="Neil image"/>
        </div>
        <div class="flex-1 min-w-0 ml-3 items-center">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                {products.title}
            </p>
            {/* <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                email@windster.com
            </p> */}
        </div>
        </div>
        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {products.id}
        </div>
    </div>
</li>
  ))

  return (
      <>
          <div className=' bg-slate-300 h-screen w-screen overflow-y-scroll overscroll-y-none overscroll-x-none'>
              <div className='p-5 rounded-sm'>
                   <Navbar />
          <div className='flex flex-row overscroll-y-none'>
                      <Sidebar />
            <div className='w-full bg-white'>
                      
<div class="w-full max-w-md p-4 m-8 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Most Wanted !</h5>
        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            31/12/22
        </a>
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            {listOfProducts}
        </ul>
   </div>                                                                                                                                                                           
                          </div>
                          </div>

              </div>
              </div>
         
              </div>
          
      </>
  )
}
