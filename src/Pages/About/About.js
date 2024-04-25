import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const Logout = ()=>{
    localStorage.removeItem('token');
    navigate("/login");
  }
  return (
    <div>
      <button onClick={Logout}>Logout</button>
    </div>
  )
}

export default About;