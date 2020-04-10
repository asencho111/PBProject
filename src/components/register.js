import React, {useState} from "react"
import {navigate } from "gatsby"

import Layout from "./layout"
import SEO from "./seo"
import {Auth} from 'aws-amplify'

function RegPage(){

  const [username, setUsername] =  useState('')
  const [password, setPassword] =  useState('')
  const [confirmPassword, setConfirmPassword] =  useState('')
  const [attributes, setAttributes] =  useState({})

  async function register(){
    if (password === confirmPassword) {
      try{
        const signUpResult = await Auth.signUp({
          username: username,
          password: password,
          attributes: attributes,
        })
        if (signUpResult.userConfirmed == false){
          const code = prompt('Please enter the code from your e-mail', '1234')
          const confirm = await Auth.confirmSignUp(username, code)
          navigate('/app')
        } else {navigate('/app')}
      } catch (err){
        alert(err.message)
      }
    } else {alert('Error', 'Passwords do not match')}
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
        <label>
          confirm
          <input
            type="text"
            name="confirmPassword"
            onChange={(event) => {
              const newConfirm = event.target.value
              setConfirmPassword(newConfirm)
            }}
          />
        </label>
        <label>
          name
          <input
            type="text"
            name="name"
            onChange={(event) => {
              const newName = event.target.value
              const name = event.target.name
              attributes[name] = newName
            }}
          />
        </label>
        <label>
          middle_name
          <input
            type="text"
            name="middle_name"
            onChange={(event) => {
              const newMiddleName = event.target.value
              const name = event.target.name
              attributes[name] = newMiddleName
            }}
          />
        </label>
        <label>
          family_name
          <input
            type="text"
            name="family_name"
            onChange={(event) => {
              const newFamilyName = event.target.value
              const name = event.target.name
              attributes[name] = newFamilyName
            }}
          />
        </label>
        <label>
          address
          <input
            type="text"
            name="address"
            onChange={(event) => {
              const newAddress = event.target.value
              const name = event.target.name
              attributes[name] = newAddress
            }}
          />
        </label>
        <label>
          birthdate in format dd.mm.yyyy
          <input
            type="text"
            name="birthdate"
            onChange={(event) => {
              const newBirthdate = event.target.value
              const name = event.target.name
              attributes[name] = newBirthdate
            }}
          />
        </label>
        <label>
          phone_number
          <input
            type="text"
            name="phone_number"
            onChange={(event) => {
              const newPhone = event.target.value
              const name = event.target.name
              attributes[name] = newPhone
            }}
          />
        </label>
        <label>
          email
          <input
            type="text"
            name="email"
            onChange={(event) => {
              const newEmail = event.target.value
              const name = event.target.name
              attributes[name] = newEmail
            }}
          />
        </label>
        <button 
          type="submit"
          onClick = {(event) => {
            event.preventDefault()
            register()
          }}>
            Submit
        </button>
      </form>
    </Layout>
  )
}

export default RegPage
