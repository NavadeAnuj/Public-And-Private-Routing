import { Outlet } from "react-router-dom";
import { UseAuth } from "../UseAuth/UseAuth"
import { Navigate } from "react-router-dom";

function PrivateRoutes (){
  const token = UseAuth();
  return token ? <Outlet/> : <Navigate to="/login"/>
}

export default PrivateRoutes