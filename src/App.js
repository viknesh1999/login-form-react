
import './App.css';

import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom"; // Import withRouter
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./form.css"

function App() {
  // const nav = useNavigate();
  const [data, setdata] = useState();

  const [error,seterror]=useState({})
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validation=(formData)=>{
    const useremailRegex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
    let error={}

    if(formData.email==''||formData.email.trim()==''){
      error.email='Email Required '
    }else if(useremailRegex.test(formData.email)==false){
      error.email='Invalid Email'
    }else if(passwordRegex.test(formData.password)==false){
      error.password='Password Required'
    }

    return error
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    console.log(validation(formData));

    const error=await validation(formData)
    if(error&&error.email||error.password){
      seterror(error)
      console.log('a2');
      return false
    }else{
      console.log('a1');
      seterror('')
      alert('Logined ')
    }

  };


  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        {
          error&&error.email?<span style={{ color: "red" }}>{error.email}</span>:<></>
        }
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {
          error&&error.password?<span style={{ color: "red" }}>{error.password}</span>:<></>
        }
        <p style={{ color: "red" }}>{data}</p>

        <button type="submit" className="login-button">
          Login
        </button>

        <br />
        <br />

        
    
      </form>


      

    </div>
  );
}

export default App;
