import React from 'react'

const Login = () => {
  return (
     <section className="bg-white">
    <div className="grid grid-cols-1 lg:grid-cols-2">
        

        <div className="flex items-center justify-center px-4 py-8 sm:py-16 lg:py-19 bg-gray-50 sm:px-6 lg:px-8">
            <div>
                <img className="w-full mx-auto" src="/images/land1.png" alt="" />

                <div className="w-full max-w-md mx-auto -mt-7 xl:max-w-xl">
                          <div className="flex gap-5">
                              <a href='/login/loginre' className='w-full'>
                                    <button type="submit" className="inline-flex font-body items-center justify-center w-full px-4 py-4 mt-3 text-base font-semibold text-black transition-all duration-200 border-2 border-slate-300  rounded-md focus:outline-none hover:bg-slate-200 ">
                                Login as retailer
                              </button>
                               </a>
                          
                              <a href='/login' className='w-full'>
                                   <button type="submit" className="inline-flex font-body items-center justify-center w-full px-4 py-4 mt-3 text-base font-semibold text-blcak transition-all duration-200 border-2 border-slate-300 rounded-md focus:outline-none hover:bg-slate-200 ">
                                Login as user
                            </button>
                               </a>
                              
                        </div>
                   
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                <h2 className="text-3xl font-bold leading-tight font-display text-black sm:text-4xl ">Welcome back Fisher</h2>
                <p className="mt-2 text-base text-gray-600">Don't have an account? <a href="/signup/signupfi" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700">Sign up</a></p>

                <form action="#" method="POST" className="mt-8">
                    <div className="space-y-5">
                   

                        <div>
                            <label className="text-base font-medium text-gray-900"> Email address </label>
                            <div className="mt-2.5">
                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="Enter email "
                                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-base font-medium text-gray-900"> Password </label>
                            <div className="mt-2.5">
                                <input
                                    type="password"
                                    name=""
                                    id=""
                                    placeholder="Enter your password"
                                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>

                        

                        <div>
                            <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                Login
                            </button>
                        </div>
                    </div>
                </form>

                
            </div>
        </div>


    </div>
</section>
  )
}

export default Login