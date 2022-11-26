import React from 'react'
import { Navigate } from 'react-router'
import useCurrentUser from '../hooks/useCurrentUser'

const ProtectedRoute = ({component: Component}) => {
  const {data, isFetching} = useCurrentUser()
  if (isFetching){
    return (
      <div>
        Loading....
      </div>
    )
  }

  return (
    data?.data ?
      <Component />
      : <Navigate to='/sign-in'/>
  )
}

export default ProtectedRoute