export interface CreateTokenProps {
  username: string;
  password: string;
}

export interface AuthContextValue {
  logOut: () => void,
  loginAction: (param : CreateTokenProps) => void,
  token?: string;
  user?: string
}
