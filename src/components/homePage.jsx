import { useEffect } from "react"
import {  useNavigate } from "react-router-dom"


export const HomePage = () =>{
    const navigate = useNavigate()

    const ifLocalStorageExist = ()=>{
        console.log(localStorage.getItem('user') === null)
        console.log(window.location.href)
      if( localStorage.getItem('user') !== null) {
           navigate('/')
           localStorage.clear()
      }else if ( localStorage.getItem('user') === null && window.location.href === "http://localhost:3000/home"){
        navigate('/')
      }
    }

    useEffect(()=>{
        const check = () => {
        if ( localStorage.getItem('user') === null && window.location.href === "http://localhost:3000/home"){
        navigate('/')
      } 
    }

    check()
    },[])
    return <div>
        <h1>welcome to home page</h1>
        <button onClick={ifLocalStorageExist}>Logout</button>
    </div>
}