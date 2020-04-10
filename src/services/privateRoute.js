import React, {Component} from "react"
import { navigate } from "gatsby"


const PrivateRoute = ({ component: Component, location, ...refs}) => {
  const user = window.localStorage.getItem('isLoggedIn')
  if (!user && location.pathname !== `/app`) {
    navigate("/app")
    return null
  }

  return <Component {...refs}/>
  
}
export default PrivateRoute