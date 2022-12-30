import React from 'react'
import Fishsellercard from '../dashboard/fishsellercard'

export default function dashboard() {
  return (
      <>
          <div className='flex w-4/5 rounded-br-xl px-8  gap-9 overflow-hidden bg-white'>
                       <div className='flex py-5 flex-col h-screen gap-2 overflow w-2/5 '>
                  <Fishsellercard fishimg="/images/f1.jpg" />
                  <Fishsellercard fishimg="/images/f2.jpg" />
                  <Fishsellercard fishimg="/images/f3.jpg" />
                  <Fishsellercard fishimg="/images/f4.jpg" />

                 
    
              </div>
                      <div className='flex py-5 flex-col h-screen gap-2 overflow w-2/5 '>
                  <Fishsellercard fishimg="/images/f5.jpg" />
                  <Fishsellercard fishimg="/images/f1.jpg" />
                  <Fishsellercard fishimg="/images/f1.jpg" />
                  <Fishsellercard fishimg="/images/f1.jpg" />

                
    
              </div>
         
              
              </div>
      </>
  )
}
