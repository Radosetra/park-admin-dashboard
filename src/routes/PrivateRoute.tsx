import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { AuthContextValue } from "../_type/auth.dto";

const PrivateRoute = () =>{
  const user: AuthContextValue | undefined = useAuth();

  if(!user?.token) return <Navigate to="/auth/login" />;
  return <Outlet />; 
}

export default PrivateRoute;