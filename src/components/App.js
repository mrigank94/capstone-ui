import "./../App.css";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import { Route, Redirect, Switch } from "react-router-dom";
import AppBar from "./AppBar";
import AddCourseForm from "./AddVehicleForm";
import "react-toastify/dist/ReactToastify.css";
import MyCourses from "./MyCourses";
import ProtectedRoute from "./common/ProtectedRoute";
import AddBooking from "./AddBookings";


function App(props) {
  return (
    <>
      <ToastContainer />
      <AppBar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <ProtectedRoute adminOnly={true} path="/add-vehicle" component={AddCourseForm}  />
        <ProtectedRoute adminOnly={false} path="/add-booking" component={AddBooking}  />
        <ProtectedRoute adminOnly={false} path="/home" component={Home} />
        <ProtectedRoute adminOnly={false} path="/my-bookings" component={MyCourses}  />
        <Redirect to="/login" />
      </Switch>
    </>
  );
}

export default App;
