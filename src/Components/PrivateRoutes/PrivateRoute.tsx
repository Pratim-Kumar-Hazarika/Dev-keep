import React from 'react'
import { Navigate, Route } from 'react-router'
import { useAuth } from '../../Context/AuthProvider'

export default function PrivateRoute({path,...props}:any) {
    const {token} = useAuth()
    return token ? <Route {...props} path={path}/> :<Navigate  replace to="/"/>
}