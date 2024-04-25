import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  const navigate = useNavigate();
  // "email": "eve.holt@reqres.in",
  // "password": "cityslicka"
  const url = "https://reqres.in/api/login";
  const handleApi = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data)
        if (response && response.data && response.data.token) {
          const token = response.data.token;
          localStorage.setItem("token", token); // Save token in localStorage
          navigate("/dashboard"); // Redirect to dashboard or any other page
        } else {
          console.log("Token not found in response");
          // Handle error or show appropriate message to the user
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" onClick={handleApi}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
