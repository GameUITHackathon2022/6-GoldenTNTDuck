// import { createContext} from "react";
// import setAuthToken from '../utils/setAuthToken'
// import useCurrentUser from '../hooks/useCurrentUser'

// export const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const localStorageTokenName = "guh_token"

//   console.log("Auth mounted")
//   if (localStorage[localStorageTokenName]){
//     setAuthToken(localStorage[localStorageTokenName])
//   }

//   // const { data } = useCurrentUser()

//   // console.log(data)

//   return (
//     <AuthContext.Provider value={}>{children}</AuthContext.Provider>
//   );
// };
