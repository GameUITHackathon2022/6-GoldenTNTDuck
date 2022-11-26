import axiosClient from "../api/axiosClient";
import setAuthToken from '../utils/setAuthToken'
import { useQuery } from "@tanstack/react-query";

const localStorageTokenName = "guh_token"

const fetchUsers = () => {
    if (localStorage[localStorageTokenName])
        setAuthToken(localStorage[localStorageTokenName])
    return axiosClient.get('/api/v1/current')
}

const useCurrentUser = () => {
    return useQuery(
        {
            queryKey: ['user'],
            queryFn: fetchUsers
        }
    )
}

export default useCurrentUser