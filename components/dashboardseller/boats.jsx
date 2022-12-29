import React from 'react'
import Fishsellercard from '../dashboardseller/boatcard'
import Sellercard from '../dashboardseller/boatcard'

export default function dashboard() {
  return (
      <>
          <div className='flex w-4/5 rounded-br-xl px-8  gap-9 overflow-hidden bg-white'>
                       <div className='flex py-5 flex-col h-screen gap-4 overflow w-2/5 '>
                  <Sellercard />
                                   <Sellercard />

                      <Sellercard />



                 
    
              </div>
                      <div className='flex py-5 flex-col h-screen gap-4 overflow w-2/5 '>
                       <Sellercard />
                                   <Sellercard />

                                   <Sellercard />

                
    
              </div>
         
              
              </div>
      </>
  )
}
