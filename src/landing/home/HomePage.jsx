import React,{ useEffect } from "react";
import axios from "axios";

import Hero from "./Hero";
import Pricing from "./Pricing";
import Awards from "./Awards";
import Education from "./Education";
import Stats from "./Stats";

import OpenAccount from "../OpenAccount";
import Swal from "sweetalert2";
import "./swal.css"


function HomePage() {

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/auth`, {
        withCredentials: true,
      })
      .then(() => {
        Swal.fire({
          title: "Welcome Back!",
          text: "You're already logged in. Redirecting to your dashboard...",
          icon: "success",
          timer: 2500,
          timerProgressBar: true,
          showConfirmButton: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
          customClass: {
            popup: "session-expired-popup",
          },
        }).then(() => {
          window.location.href = import.meta.env.VITE_DASHBOARD_URL;
        });
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <Hero />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
