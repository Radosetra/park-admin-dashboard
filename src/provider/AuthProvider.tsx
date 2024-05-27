import { useContext, createContext, ReactNode, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContextValue, CreateTokenProps } from '../_type/auth.dto';
import { useCreateToken } from '../hooks/auth.hooks';

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [user, setUser] = useState<string | undefined>();
  const [token, setToken] = useState<string | undefined>();
  const navigate = useNavigate();

  const {mutate: createToken, isSuccess, data: responseData, error} = useCreateToken();

  useEffect(()=>{
    if(isSuccess){
      const tmpData = {
        username: responseData?.data.username,
        token: responseData?.data.token
      }
      setUser(responseData?.data.username);
      setToken(responseData?.data.token);

      localStorage.setItem("token", responseData?.data.token)
      console.log("Token data", responseData?.data.token);
      
      navigate("/overview");
    }

    if(error){
      console.log("Login error", error);
      
    }

  }, [isSuccess, responseData])

  const loginAction = async (data: CreateTokenProps) => {

    createToken(data);
  };

  const logOut = () => {
    setUser("");
    setToken("");
    localStorage.removeItem("token");
    navigate("/auth/login");
  };
  // const someValue: AuthContextValue = {token: ""}
  return <AuthContext.Provider value={{user, token, logOut, loginAction}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  // const context = useContext(AuthContext);
  // if (context === undefined) {
  //   throw new Error('useAuth must be used within an AuthProvider');
  // }
  return useContext(AuthContext);;
};
