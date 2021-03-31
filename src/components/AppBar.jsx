import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import authService from "../service/auth.service";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "white",
    margin: "20px",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            HireWheels
          </Typography>
          {!authService.isLoggedIn() && (
            <>
              <NavLink className={classes.link} to="/login">
                Login
              </NavLink>
              <NavLink className={classes.link} to="/signup">
                Sign Up
              </NavLink>
            </>
          )}
          {authService.isLoggedIn() && (
            <>
              <NavLink className={classes.link} to="/home">
                Home
              </NavLink>
              <NavLink className={classes.link} to="/add-booking">
                Book a Vehicle
              </NavLink>
              <NavLink className={classes.link} to="/my-bookings">
                My Bookings
              </NavLink>
              <NavLink className={classes.link} to="/profile">
                Profile
              </NavLink>
            </>
          )}
          {authService.isLoggedIn() && authService.isAdmin() && (
            <>
              <NavLink className={classes.link} to="/add-vehicle">
                Add Vehicle
              </NavLink>
            </>
          )}

          {authService.isLoggedIn() && (
            <Button variant='contained' color='secondary' onClick={authService.doLogout}>Logout</Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
