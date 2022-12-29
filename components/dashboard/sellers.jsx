import React from 'react'
import Fishsellercard from '../dashboard/fishsellercard'
import Sellercard from '../dashboard/sellercard'

export default function dashboard() {
  return (
      <>
          <div className='flex w-4/5 rounded-br-xl px-8  gap-9 overflow-hidden bg-white'>
                       <div className='flex py-5 flex-col h-screen gap-2 overflow w-2/5 '>
                  <Sellercard />
                                   <Sellercard />

                                   <Sellercard />



                 
    
              </div>
                      <div className='flex py-5 flex-col h-screen gap-2 overflow w-2/5 '>
                       <Sellercard />
                                   <Sellercard />

                                   <Sellercard />

                
    
              </div>
         
              
              </div>
      </>
  )
}
