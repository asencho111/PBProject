import React, {useState, useEffect} from "react"
import {navigate } from "gatsby"

import Layout from "./layout"
import SEO from "./seo"
import {isUserLogged} from '../services/auth'
import {Auth} from 'aws-amplify'

function LoginPage(){

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  useEffect(() => {
    // Auth.currentSession().then(shit => console.log(shit))
    // Auth.signOut().then(()=>{
    //   window.localStorage.clear()
    // }).catch(() => alert('err with effect'))
  })


  function forgotPass(){
    try {
      const username = prompt('Please enter your username to reset your password', ' ')
      // await Auth.forgotPassword(username)
      navigate('app/resetPassword', {state: {username}})
    } catch (err) {alert(err.message)}
    
  }
  
  async function signIn(){
    try {
      const user = await Auth.signIn(username, password)
      const code = prompt('Enter the validation code','')
      const loggedUser = await Auth.confirmSignIn(user, code)
      isUserLogged(loggedUser)
      navigate('/app/page-2')
    } catch(err) {
      console.log('err: ' +err.code + ' ' + err.message)
    }
  }

  return (
    <Layout>
      <SEO title="Home" />
      <form>
        <label>
          username
          <input
            type="text"
            name="username"
            onChange={(event) => {
              const newUsername = event.target.value
              setUsername(newUsername)
            }}
          />
        </label>
        <label>
          password
          <input
            type="text"
            name="password"
            onChange={(event) => {
              const newPass = event.target.value
              setPassword(newPass)
            }}/>
        </label>
        <div>
          <button 
            type="submit"
            onClick = {(event) => {
              event.preventDefault()
              signIn()
          }}>
            Submit
          </button>
          <button 
            type="button"
            onClick = {(event) => {
              event.preventDefault()
              navigate('app/register')
          }}>
            register
          </button>
          <button 
            type="button"
            onClick = {async (event) => {
              event.preventDefault()
              await forgotPass()
          }}>
            recover pass
          </button>
        </div>
      </form>
    </Layout>
  )
}

export default LoginPage
