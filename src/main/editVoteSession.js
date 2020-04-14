import React, { useState } from "react"
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import {navigate} from 'gatsby'
import * as mutations from '../graphql/mutations'
import Layout from "../components/layout"
import SEO from "../components/seo"

const EditVoteSession = function({route}){

  const [description,setDesc] = useState("")
  const [budget,setBudget] = useState("")
  const [area,setArea] = useState("")
  const {item} = route.params
  const [updateVS] = useMutation(gql(mutations.updateVoteSession))
  const updateVotingSession = async () => {
  }

  return (
    <Layout>
      <SEO title="Creation form" />
      <form onSubmit = {async (event) => {
            event.preventDefault()
            await updateVotingSession()
            navigate('/app/main')
          }}>
        <label>
          desc
          <input
            type="text"
            name="username"
            onChange={(event) => {
              const desc = event.target.value
              setDesc(desc)
            }}
          />
        </label>
        <label>
          budget
          <input
            type="text"
            name="password"
            onChange={(event) => {
              const budget = event.target.value
              setBudget(budget)
            }}/>
        </label>
        <label>
          area
          <select onBlur = {(event) => {
            const area = event.target.value
            setArea(area)
          }} >
            <option value = "Hoxton">Hoxton</option>
            <option value = "Stratford">Stratford</option>
            <option value = "Westminster">Westminster</option>
          </select>
        </label>
        
        <button type="submit">
            Submit
        </button>
      </form>
    </Layout>
  )
}
export default EditVoteSession
