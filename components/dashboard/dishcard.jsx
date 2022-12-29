import React from 'react'

export default function dishcard() {
  return (
 <div className="">
      <div className="w-80 mt-0 m-auto lg:mt-3">
        <img src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg" alt=""className="rounded-t-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover"/>
        <div className="bg-white shadow-xl rounded-b-3xl mb-3">
          <h2 className="text-center text-gray-800 text-xl font-body pt-6">Sardine Curry</h2>
          
          <div className="grid grid-cols-4 w-72 lg:w-5/6 m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">
            <div className="col-span-1">
              <img className="w-15 lg:w-12" src="https://img.icons8.com/ultraviolet/40/000000/musical-notes.png" alt="music icon"/>
            </div>
            <div className="col-span-2 pt-1">
              <p className="text-gray-800 font-bold lg:text-sm">Anual Plan</p>
              <p className="text-gray-500 text-sm">$59.99/year</p>
            </div>
            <div className="pt-2">
              <a href="https://google.com" className="text-indigo-700 underline hover:no-underline  text-sm hover:text-indigo-500 font-bold">Buy</a>
            </div>
          </div>
          <div className="bg-slate-300 w-72 lg:w-5/6 m-auto mt-6 mb-5 p-2 hover:bg-slate-500 rounded-2xl  text-black text-center shadow-xl shadow-bg-blue-700">
            <button classs="lg:text-sm text-lg font-bold">View now</button>
                  </div>
         
        </div>
      </div>
    </div>
  )
}
