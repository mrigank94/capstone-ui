import "./../App.css";
import React, { useEffect, useState } from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
import { ToastContainer } from "react-toastify";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import { Route, Redirect, Switch } from "react-router-dom";
import AppBar from "./AppBar";
import AddCourseForm from "./AddCourseForm";
import "react-toastify/dist/ReactToastify.css";
import CourseDetails from "./CourseDetails";
import MyCourses from "./MyCourses";
import authService from "../service/auth.service";
import ProtectedRoute from "./common/ProtectedRoute";

function App() {
  return (
    <>
      <ToastContainer />
      <AppBar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <ProtectedRoute path='/add-course' component={AddCourseForm}/>
        <Route path="/all-courses" component={CourseDetails} />
        <Route path="/my-courses" component={MyCourses} />
        <Redirect to="/login" />
      </Switch>
    </>
  );
}

export default App;
