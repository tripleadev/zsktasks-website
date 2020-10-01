import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Tasks from "../components/tasks"

const IndexPage = () => (
  <Layout>
    <h1>Zadania</h1>
    <SEO title="Zadania" />
    <Tasks />
  </Layout>
)

export default IndexPage
