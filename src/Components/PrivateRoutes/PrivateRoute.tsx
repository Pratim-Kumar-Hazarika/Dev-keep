import React from 'react'
import { Navigate, Route } from 'react-router'
import { useAuth } from '../../Context/AuthProvider'

export const PrivateRoute: React.FC<{path:any,element:any}> = ({path,...props}) => {
    const {token} = useAuth()
    return token ? <Route {...props} path={path}/> :<Navigate  replace to="/"/>
}