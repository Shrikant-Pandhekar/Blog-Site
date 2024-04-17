import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  console.log(inputs);
  const { login } = useContext(AuthContext);

  const [err, setError] = useState(null);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.response.data);
    }
  };
  return (
    <div className="auth">
      <h1>Log In</h1>
      <form>
        <input
          required
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{JSON.stringify(err)}</p>}
        <span>
          Don't You Have an Account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
