import React from 'react'

export default function dishcard({dish,name}) {
    return (
      <div className="mx-auto">
    
    <div className="bg-white border border-gray-200 rounded-lg max-w-full dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
                    <img className="rounded-t-lg" src={dish} alt="">
                        </img>
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="text-slate-800 font-body text-md tracking-tight mb-2 dark:text-white">{name}</h5>
            </a>
            <a href="#" className="text-white bg-slate-500 hover:bg-slate-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>

</div>

//  <div className="">
//       <div className="w-80 mt-0 m-auto lg:mt-3">
//         <img src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg" alt=""className="rounded-t-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover"/>
//         <div className="bg-white shadow-xl rounded-b-3xl mb-3">
//           <h2 className="text-center text-gray-800 text-xl font-body pt-6">Sardine Curry</h2>
          
//           <div className="grid grid-cols-4 w-72 lg:w-5/6 m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">
//             <div className="col-span-1">
//               <img className="w-15 lg:w-12" src="https://img.icons8.com/ultraviolet/40/000000/musical-notes.png" alt="music icon"/>
//             </div>
//             <div className="col-span-2 pt-1">
//               <p className="text-gray-800 font-bold lg:text-sm">Anual Plan</p>
//               <p className="text-gray-500 text-sm">$59.99/year</p>
//             </div>
//             <div className="pt-2">
//               <a href="https://google.com" className="text-indigo-700 underline hover:no-underline  text-sm hover:text-indigo-500 font-bold">Buy</a>
//             </div>
//           </div>
//           <div className="bg-slate-300 w-72 lg:w-5/6 m-auto mt-6 mb-5 p-2 hover:bg-slate-500 rounded-2xl  text-black text-center shadow-xl shadow-bg-blue-700">
//             <button classs="lg:text-sm text-lg font-bold">View now</button>
//                   </div>
         
//         </div>
//       </div>
//     </div>
  )
}
