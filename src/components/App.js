import "./../App.css";
import React, { useEffect, useState } from "react";
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
import ProtectedRoute from "./common/ProtectedRoute";


function App(props) {
  return (
    <>
      <ToastContainer />
      <AppBar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <ProtectedRoute adminOnly={true} path="/add-course" component={AddCourseForm}  />
        <ProtectedRoute adminOnly={false} path="/course-details/:id" component={CourseDetails}  />
        <Route path="/all-courses" component={Home} />
        <ProtectedRoute adminOnly={false} path="/my-courses" component={MyCourses}  />
        <Redirect to="/login" />
      </Switch>
    </>
  );
}

export default App;
