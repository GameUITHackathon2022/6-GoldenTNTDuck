import { useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";
import setAuthToken from '../utils/setAuthToken'

export const AuthContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const userStatus = { currentUser, setCurrentUser };

  const localStorageTokenName = "guh_token"

  if (localStorage[localStorageTokenName]){
    setAuthToken(localStorage[localStorageTokenName])
  }

  // const { data } = useQuery({
  //   queryKey: ['user'],
  //   queryFn: () => axiosClient.get('/users')
  // })

  // useEffect(() => {
  //   if (data)
  //     setCurrentUser(data)
  // }, [])

  return (
    <AuthContext.Provider value={userStatus}>{children}</AuthContext.Provider>
  );
};
