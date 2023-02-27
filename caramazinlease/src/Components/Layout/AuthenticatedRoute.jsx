import React, { useContext } from "react";
import { Route,Link } from "react-router-dom";
import Auth from "../../context/Auth";

const AuthenticatedRoute = ({ path, component}) =>{
    const {isAuthenticated} = useContext(Auth);

    console.log(isAuthenticated);
    return isAuthenticated ? (
        <Route exact path={path} component={component} />
    ) : (
        <Link to ="/login" />
    )
}

export default AuthenticatedRoute;