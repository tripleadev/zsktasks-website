import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Grid from '../components/grid'

const IndexPage = () => (
  <Layout>
    <SEO title="Zadania" />
    <h1>Hi human!</h1>
    <p>Welcome zskTasks !!!</p>
    <p>Now go build something great.</p>
    <Grid/>
  </Layout>
);

export default IndexPage;