import React from 'react'
import Fishsellercard from './fishsellercard'
import Dishcard from './dishcard'

export default function dashboard() {
  return (
      <>
          <div className='flex flex-col gap-5 rounded-br-xl px-5 pr-px-5 bg-white'>
              <div className='flex py-2 flex-row gap-7 mt-3 overflow '>
                  <Dishcard dish = "/images/dish1.jpg"/>
                  <Dishcard dish = "/images/dish2.jpg"/>
                  <Dishcard dish = "/images/dish1.jpg"/>
                  <Dishcard dish = "/images/dish1.jpg"/>
              </div>
                     <div className='flex py-2 flex-row gap-7 overflow '>
                  <Dishcard dish = "/images/dish1.jpg"/>
                  <Dishcard dish = "/images/dish1.jpg"/>
                  <Dishcard dish = "/images/dish1.jpg"/>
                  <Dishcard dish = "/images/dish1.jpg"/>
              </div>
          </div>
            
      </>
  )
}
