import React from 'react'
import Fishsellercard from './fishsellercard'
import Dishcard from './dishcard'

export default function poll() {
  return (
      <>
          <div className='flex flex-col  w-full gap-5 px-8 rounded-br-xl pr-px-5 bg-white'>
              <h3 class="mb-4 font-semibold text-md  mt-9  text-gray-900 dark:text-white">Your tommorow fish intrest</h3>
<ul class="w-80  text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
            <label for="list-radio-license" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Salmon </label>
        </div>
    </li>
    <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="list-radio-id" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
            <label for="list-radio-id" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Sardine</label>
        </div>
    </li>
    <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="list-radio-millitary" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
            <label for="list-radio-millitary" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Tuna</label>
        </div>
    </li>
    <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="list-radio-passport" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
            <label for="list-radio-passport" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Catfish</label>
        </div>
                  </li>

                   <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="list-radio-passport" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
            <label for="list-radio-passport" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Catla</label>
        </div>
                  </li>

                   <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="list-radio-passport" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
            <label for="list-radio-passport" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Seer</label>
        </div>
                  </li>

                   <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="list-radio-passport" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
            <label for="list-radio-passport" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Tilapia </label>
        </div>
                  </li>

                   <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="list-radio-passport" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
            <label for="list-radio-passport" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Codfish</label>
        </div>
                  </li>
                  <div>
                            <button type="submit" className="inline-flex font-body items-center justify-center w-full px-2 py-2 mt-3 text-base font-semibold text-white transition-all duration-200 bg-slate-700 border border-transparent rounded-md focus:outline-none hover:bg-slate-500 focus:bg-blue-700">
                                Submit
                            </button>
                        </div>
              </ul>
              
          </div>
            
      </>
  )
}
