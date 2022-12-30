import React from 'react'
import Fishsellercard from '../dashboard/fishsellercard'
import axios from 'axios';
import { useState } from 'react';

export default function dashboard() {

    
  const [state, setState] = useState({
      name: "",
      price: "",
      discription: "",
      retailers: "rohit",
      fishermen:"jamal",
        
        
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    const userData = {
        name : state.name,
        price: state.price,
        discription: state.discription,
       


      };
      axios
      .post(
          "https://imposed-game-seemed-warranty.trycloudflare.com/api/addfish/",
          userData
          )
          .then((res) => {
        
          
          console.log(res.data.token);


          
          window.location.reload();
        

        // console.log(res.data);
        // console.log(userData);
        // handle success
      })
      .catch((err) => {
        console.log(err);
        

        // handle error
      });
  };
  
  return (
      <>
          <div className='flex w-full rounded-br-xl px-5 overflow-hidden bg-white'>
                       <div className='flex py-3 flex-col h-screen gap-2 overflow w-2/5 '>
            <section class="h-fit w-full py-10  sm:py-10 lg:py-1">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-3xl">
        

        <div class="max-w-5xl mx-auto mt-0  sm:mt-0">
             

            <div class="mt-6 overflow-hidden bg-slate-100 rounded-xl">
                <div class="px-6 py-12 sm:p-12">
                    <h3 class="text-3xl font-semibold text-center text-gray-900">Add fish</h3>

                    <form action="#" method="POST" class="mt-14">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Fish name </label>
                                <div class="mt-2.5 relative">
                                    <input type="name" name="name" value={state.name} onChange={handleChange} id="" placeholder="" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div>

                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Price </label>
                                <div class="mt-2.5 relative">
                                    <input type="number" name="price" id="" value={state.price}
                      onChange={handleChange}placeholder="" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div>

                            <div className='sm:col-span-2'>
                                <label for="" class="text-base font-medium text-gray-900"> Discription </label>
                                <div class="mt-2.5 relative">
                                    <textarea type="text" name="discription" id="" value={state.discription}
                      onChange={handleChange} placeholder="Enter your age" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div>

                  

                           

                            <div class="sm:col-span-2">
                                <button type="submit" onClick={handleSubmit1} class="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-slate-600 border border-transparent rounded-md focus:outline-none hover:bg-slate-700 focus:bg-blue-700">
                                    Add
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
    
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
