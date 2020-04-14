import React, { useState } from "react"
import { useMutation } from '@apollo/react-hooks';
import {createVoteSession} from '../graphql/mutations'
import gql from 'graphql-tag'
import {navigate} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"


const VoteCreatingPage = function(){


  const [description,setDesc] = useState("")
  const [budget,setBudget] = useState("")
  const [area,setArea] = useState("")
  const [votingMethod,setVM] = useState("")
  const createSessionDocFile = gql(createVoteSession)
  const [createSession] = useMutation(createSessionDocFile)



  const createVotingSession = async () => {
    try{
      const voteOptions = {
        description: description,
        budget: budget,
        area: area
      }
      console.log(voteOptions)
      const data = await createSession({variables: {input: voteOptions}})
      console.log("data reached: " + data)
    } catch(e) {alert("err: "+ e.code + e.message)}
  }

  return (
    <Layout>
      <SEO title="Creation form" />
      <form onSubmit = {async (event) => {
            event.preventDefault()
            await createVotingSession()
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
        <label>
          Voting system
          <select onBlur = {(event) => {
            const metod = event.target.value
            setVM(method)
          }} >
            <option value = "yes/no">Yes-or-no voting system</option>
            <option value = "preference">Preferemce voting system</option>
            <option value = "ranking">Ranking voting system</option>
          </select>
        </label>
        
        <button type="submit">
            Submit
        </button>
      </form>
    </Layout>
  )
}
export default VoteCreatingPage
