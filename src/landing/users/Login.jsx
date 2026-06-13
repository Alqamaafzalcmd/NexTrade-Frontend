import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { toast, Bounce } from "react-toastify";

import { useNavigate } from "react-router-dom";

import "./Login.css";

function Login() {
   const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const [data, setData] = useState({
    username_email: "alqma123",
    password: "12345###",
  });

  let handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let res = await axios.post("http://localhost:8080/login", data, {
        withCredentials: true,
      });

      console.log(res);
      window.location.href = "http://localhost:5174/";

    } catch (err) {
      // console.log(err);
      toast.error(err.response.data.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }

    setData({
      username_email: "",
      password: "",
    });
  };

  let handleInputChange = (event) => {
    // console.log(event);

    setData((curr) => {
      curr[event.target.name] = event.target.value;
      return { ...curr };

      //  return {...curr, [event.target.name]: event.target.name};
    });
  };

  return (
    <div className="container min-vh-80 d-flex justify-content-center align-item-center m-5">
      <div className="login-card shadow m-5">
        <h4 className="text-center mb-4">Login on NexTrade</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <TextField
              fullWidth
              required
              name="username_email"
              label="username / email"
              value={data.username_email}
              onChange={handleInputChange}
            />
          </div>

          {/* <div className="mb-3">
            <TextField
              fullWidth
              required
              name="email"
              type="email"
              label="Email"
              value={data.email}
              onChange={handleInputChange}
            />
          </div> */}

          <div className="mb-3">
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="password-form">Password</InputLabel>

              <OutlinedInput
                onChange={handleInputChange}
                value={data.password}
                id="password-form"
                name="password"
                type={showPassword ? "text" : "password"}
                label="Password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary w-100"
          >
            Login
          </button>

          <p className="text-center mt-3 mb-0">
            Don't have an account?
            <Link to="/signup" className="ms-1">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
