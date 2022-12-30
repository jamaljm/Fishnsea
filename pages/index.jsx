import HomePage from "../components/home/HomePage"
import dashboard from "./dashboard/index";
import { useState } from "react";
import Signup from "../components/auth/signup/Signup";

export default function Home() {

    const [auth, setAuth] = useState(
    false 
    );
  
  return (
    <>
     <HomePage />
      

    </>
  )
}
