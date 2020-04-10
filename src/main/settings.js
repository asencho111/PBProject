import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Auth } from "aws-amplify"
import { navigate } from "gatsby"

const SettingsPage = function(){
  //This is a protected component 
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword,setNewPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")

  const changePassword = async () => {
    try{
      const user = await Auth.currentAuthenticatedUser()
      if (newPassword == confirmPassword){
        console.log("Current: "+ user)
        const change = await Auth.changePassword(user,oldPassword, newPassword)
        alert("You have successfully changed your password" + change)
      }else alert("Paswords are different")
    } catch(err) {alert(err.message)}
  }
  return (
    <Layout>
      <SEO title= {"heya"}/>
      <form>
       <label>
          current password
          <input
            type="password"
            name="current password"
            onChange={(event) => {
              const password = event.target.value
              setOldPassword(password)
            }}
          />
        </label>
        <label>
          new
          <input
            type="password"
            name="username"
            onChange={(event) => {
              const newPassword = event.target.value
              setNewPassword(newPassword)
            }}
          />
        </label>
        <label>
          repeat
          <input
            type="password"
            name="username"
            onChange={(event) => {
              const newConfirm = event.target.value
              setConfirmPassword(newConfirm)
            }}
          />
        </label>                
      </form>
        <button 
          type="submit"
          onClick = {async (event) => {
            event.preventDefault()
            await changePassword()
            navigate('/app/main')
          }}>
          Change password
        </button>
        <button
          type="submit"
          onClick = {async (e) => {
            e.preventDefault()
            await Auth.signOut()
            window.localStorage.clear()
            navigate('/app')
          }}>
          Sign Out
        </button>
    </Layout>
  )
}
export default SettingsPage
