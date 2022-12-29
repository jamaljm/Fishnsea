import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {

    
    
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [type, setType] = useState("volunteer");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    console.log(type, state);
    const userData = {
        email : state.email,
        name : state.name,
        password : state.password,

      };
    axios
      .post(
        "https://inherited-stuck-asp-carrier.trycloudflare.com/api/signup-customer/",
        userData
      )
      .then((res) => {
        console.log(res.data.token);
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("auth", "true");
          window.localStorage.setItem("name", state.name);
          setAuth = "true";
  navigate('/dashboardseller');
        setLogin(res.data.message);
        window.location.reload();

        console.log(res.data);
        console.log(userData);
        // handle success
      })
      .catch((err) => {
        console.log(err);
        setLogin("User already Exists", err.message);

        // handle error
      });
  };

  const handleType = (e) => {
    setType(e.target.value);
  };
  //create a drop down with 2 options

    
  return (
    <section className="bg-white">
    <div className="grid grid-cols-1 lg:grid-cols-2 h-full" >
        

        <div className="flex items-center justify-center px-4 py-8 sm:py-16 lg:py- bg-gray-50 sm:px-6 lg:px-8">
            <div>
                <img className="w-full mx-auto" src="/images/land1.png" alt="" />

                <div className="w-full max-w-md -mt-7 mx-auto xl:max-w-xl">

                          <div className="flex gap-5">
                            <a href='/signup/signupre' className='w-full'>
                            <button type="submit" className="inline-flex font-body items-center justify-center w-full px-4 py-4 mt-3 text-base font-semibold text-black transition-all duration-200 border-2 border-slate-300  rounded-md focus:outline-none hover:bg-slate-200 ">
                                Signup as retailer
                                  </button>
                              </a>
                            <a href='/signup' className='w-full'>
                               <button type="submit" className="inline-flex font-body items-center justify-center w-full px-4 py-4 mt-3 text-base font-semibold text-blcak transition-all duration-200 border-2 border-slate-300 rounded-md focus:outline-none hover:bg-slate-200">
                                Signup as user
                                  </button>
                                  </a>
                        </div>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl font-display">Sign up as fisher</h2>
                <p className="mt-2 text-base text-gray-600 font-body">Already have an account? <a href="/login/loginfi" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700">Login</a></p>

                <form action="/dashboardseller" method="POST" className="mt-8">
                    <div className="space-y-5">
                        <div>
                            <label className="text-base font-medium text-gray-900 font-body"> Full Name </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Enter your full name"
                                    className="block w-full p-4 text-black font-body placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-base font-medium text-gray-900 font-body"> Email address </label>
                            <div className="mt-2.5">
                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="Enter email "
                                    className="block w-full p-4 font-body text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-base font-medium text-gray-900 font-body"> Password </label>
                            <div className="mt-2.5">
                                <input
                                    type="password"
                                    name=""
                                    id=""
                                    placeholder="Enter your password"
                                    className="block w-full p-4 text-black font-body placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>

                        

                        <div>
                            <button type="submit" className="inline-flex font-body items-center justify-center w-full px-4 py-4 mt-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                Signup
                            </button>
                        </div>
                    </div>
                </form>

                
            </div>
        </div>


    </div>
</section>

  );
};

export default Signup;
