import React from 'react'
import Fishsellercard from '../dashboard/fishsellercard'
import Sellercard from '../dashboard/sellercard'

export default function dashboard() {
  return (
      <>
          <div className='flex w-4/5 rounded-br-xl px-8  gap-9 overflow-hidden bg-white'>
                       <div className='flex py-5 flex-col h-screen gap-4 overflow w-2/5 '>
                  <Sellercard image="/images/p1.jpg" name= "jacob"/>
                                   <Sellercard image="/images/p2.jpg" name= "vasudev"/>

                                   <Sellercard image="/images/p3.jpg" name= "karthik sukumaran"/>



                 
    
              </div>
                      <div className='flex py-5 flex-col h-screen gap-4 overflow w-2/5 '>
                       <Sellercard image="/images/p4.jpg" name= "Allen reji samual"/>
                                   <Sellercard image="/images/p5.jpg" name= "jacqueline"/>

                                   <Sellercard image="/images/p6.jpg" name= "jacob"/>

                
    
              </div>
         
              
              </div>
      </>
  )
}
