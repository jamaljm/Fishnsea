import React from 'react'
import Fishsellercard from '../dashboard/fishsellercard'

export default function dashboard() {
  return (
      <>
          <div className='flex w-full rounded-br-xl px-5 overflow-hidden bg-white'>
                       <div className='flex py-5 flex-col h-screen gap-2 overflow w-2/5 '>
                  <Fishsellercard fishimg="/images/f1.jpg" />
                  <Fishsellercard fishimg="/images/f2.jpg" />
                  <Fishsellercard fishimg="/images/f3.jpg" />
                  <Fishsellercard fishimg="/images/f4.jpg" />
                  <a href='/dashboard/dashboardlistfi'>
                        <button type="submit" className="inline-flex font-body items-center justify-center w-2/5 px-4 py-1 -mt-1 text-base font-semibold text-black transition-all duration-200 bg-slate-200 border border-transparent rounded-md focus:outline-none hover:bg-slate-400">
                                View more
                            </button>
</a>
                
    
              </div>
         
              <div className='p-6 w-3/5 rounded-md'>
                  <iframe
                      className='rounded-md'
          src="https://www.google.com/maps/d/u/0/embed?mid=1PQDDkC1ana5zzCtnN1WwiEvUe1J2BvI&ehbc=2E312F"
          width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="10"
        />
        </div>
              </div>
      </>
  )
}
