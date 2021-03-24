import authService from "../../service/auth.service";

const ProtectedRoute = ({component: Component, path}) => {
    if(authService.isLoggedIn() && authService.isAdmin()) {
        return <Route path={path} component={Component}/>
    } else {
        return <Redirect to='/login'/>
    }
}
 
export default ProtectedRoute;