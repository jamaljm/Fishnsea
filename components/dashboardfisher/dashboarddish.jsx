import React from 'react'
import Fishsellercard from './fishsellercard'
import Dishcard from './dishcard'

export default function dashboard() {
  return (
      <>
          <div className='flex flex-col gap-5 rounded-br-xl px-5 pr-px-5 bg-white'>
              <div className='flex py-2 flex-row gap-7 mt-3 overflow '>
                  <Dishcard dish = "/images/dish1.jpg" name = "Trevally fish moly"/>
                  <Dishcard dish = "/images/dish2.jpg" name = "sea goby"/>
                  <Dishcard dish = "/images/dish3.jpg" name = "seerr"/>
                  <Dishcard dish = "/images/dish4.jpg" name = "sardine"/>
              </div>
                     <div className='flex py-2 flex-row gap-7 overflow '>
                  <Dishcard dish = "/images/dish5.jpg" name = "lobster"/>
                  <Dishcard dish = "/images/dish6.jpg" name = "crab"/>
                  <Dishcard dish = "/images/dish7.jpg" name = "Mango fish nirvana"/>
                  <Dishcard dish = "/images/dish8.jpg" name = "Trevally fish moly"/>
              </div>
          </div>
            
      </>
  )
}
