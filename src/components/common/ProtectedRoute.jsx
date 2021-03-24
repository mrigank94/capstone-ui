import { Redirect, Route } from "react-router";
import authService from "../../service/auth.service";

const ProtectedRoute = ({component: Component, path}) => {
     return (<Route path={path} render={() => {
         if(authService.isLoggedIn() && authService.isAdmin()) {
             return <Component/>
         } else {
             return <Redirect to='/login'/>
         }
        }}/>)
}

export default ProtectedRoute;