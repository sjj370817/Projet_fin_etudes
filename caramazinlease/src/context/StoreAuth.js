// import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const StoreAuth = ({children}) => {
console.log(AuthService.isLogged())
    
    if(!AuthService.isLogged()){
        return <Navigate to="/auth/login"/>
    }
    return children
};

export default StoreAuth;