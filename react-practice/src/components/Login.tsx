import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  // Form Handling

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form is submuitted");
    console.log("email",email);
    console.log("password",password)
    navigate("/",)
    
  };



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" style={{ display:"block"}}>Email</label>
        <input type="email" value={email}
        onChange={(e)=>setEmail(e.target.value)}
        name="email" id="email" />
        <label htmlFor="password" style={{ display:"block"}}>Password</label>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} name="password" id="password" />
        <input type="submit" style={{ display:"block",marginTop:"10px"}} value="Login" />
      </form>
    </div>
  );
};

export default Login;
