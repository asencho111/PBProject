import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HomePage = function(){
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the home page</h1>
      <p>You can see results here</p>
    </Layout>
  )
}
export default HomePage
