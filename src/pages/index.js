import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Tasks from "../components/tasks"
import Filters from "../components/filters"

const IndexPage = () => (
  <Layout>
    <h1>Zadania</h1>
    <SEO title="Zadania" />
    <Filters />
    <Tasks />
  </Layout>
)

export default IndexPage
