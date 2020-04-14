import React, {useEffect}from "react"
import * as queries from "../graphql/queries"
import Layout from "../components/layout"
import SEO from "../components/seo"
import gql from 'graphql-tag'
import {useQuery} from '@apollo/react-hooks'
import { navigate } from "gatsby"

const HomePage = function(){

  const ListVotes = gql(queries.listVoteSessions)

  const {loading, err, data} = useQuery(ListVotes, {
    pollInterval: 2000
  })

  if (loading) return <p>loading...</p>
  if (err) alert(err.message)

  return (
    <Layout>
      <SEO title="Page two" />

      <table>
        <tr>
          <th>Description</th>
          <th>Budget</th>
          <th>Area</th>
        </tr>
        {data.listVoteSessions.items.map(item => (
          <tr>
            <td onClick={e=>{
              e.preventDefault()
              navigate('app/main/editVoteSession', {item: item})
            }}>{item.description}</td>
            <td>{item.budget}</td>
            <td>{item.area}</td>
          </tr>
        ))}
      </table> 
      <button onClick={e => {e.preventDefault()
      navigate('app/main/createVoteForm')}}>
        Create new Voting Session
      </button>
    </Layout> 
  )
}
export default HomePage
