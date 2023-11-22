import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const LoginPage = ()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate()

    const handleLogin = () =>{
        if(email === "email@gmail.com" && password === "password"){
            alert('login succesful')
             navigate('/home')
             localStorage.setItem('user',email)
        }else{
            alert("invalid creditials")
        }
    }

    return <div>
       <h1>Login Page</h1> 
       <div>
        <label>EMAIL</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
       </div>
       <div>
        <label>PASSWORD</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
       </div>
       <button onClick={handleLogin}>LOGIN</button>
    </div>
}