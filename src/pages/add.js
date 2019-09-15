import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Form from '../components/form'

const Add = () => (
  <Layout>
    <SEO title="Dodaj Zadanie" />
    <h1>DODAJ ZADANIE</h1>
    <p>Let's add some tasks.</p>
    <Form />
  </Layout>
)

export default Add
