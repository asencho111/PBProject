import React, {useState, useEffect} from "react"
import {navigate} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Auth} from 'aws-amplify'

function ResetPasswordPage({location}){
  const [code, setCode] =  useState('')
  const [password, setPassword] =  useState('')
  const [confirmPassword, setConfirmPassword] =  useState('')  
  const username = location.state.username

  useEffect(()=>{
    console.log(location.state)
    console.log(username)
  })

  const resetPassword = async function(){
    try {
      if (password == confirmPassword ){
        const user = await Auth.forgotPasswordSubmit(username, code, password)
        alert('submit successful')
      } else alert('passwords do not match')
    } catch(err) {alert(err.message)}
  }

  return (
    <Layout>
      <SEO title="Home" />
      <form>
        <label>
          Confirmation code
          <input
            type="text"
            name="username"
            onChange={(event) => {
              const newCode = event.target.value
              setCode(newCode)
            }}
          />
        </label>
        <label>
          password
          <input
            type="password"
            name="password"
            onChange={(event) => {
              const newPass = event.target.value
              setPassword(newPass)
            }}/>
        </label>
        <label>
          repeat pass
          <input
            type="password"
            name="confirm"
            onChange={(event) => {
              const newConfirm = event.target.value
              setConfirmPassword(newConfirm)
            }}/>
        </label>
          <button 
            type="submit"
            onClick = {(event) => {
              event.preventDefault()
              resetPassword().then(()=>{
                navigate('/app')
                alert('success')
              }).catch(err => alert(err.message))
          }}>
            Submit
          </button>
      </form>
    </Layout>
  )
}

export default ResetPasswordPage
