import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"

import axios from "axios"
import styled from "styled-components"

const StyledTable = styled.table`
  margin: 20px;
  border-collapse: collapse;

  tr {
    border-bottom: 1px solid #dddddd;

    &:hover {
      background-color: #eeeeee;
    }

    th {
      font-size: 20px;
      text-align: left;
      background-color: white;
    }

    td {
      padding: 5px;
      border: none;

      input[type="text"] {
        width: 100%;
        height: 100%;
        margin: 0;
        outline: none;
        border: none;
        font-size: 16px;
      }
    }

    td.table-field {
      font-weight: bold;
      min-width: unset;
    }
  }
`

class Duties extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      students: [],
    }
  }

  componentDidMount() {
    axios.get("https://zsktasks-api.herokuapp.com/duties").then(res => {
      this.setState({
        students: res.students,
      })
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Dyżurni" />
        <h1>Dyżurni</h1>
        <StyledTable>
          <tr>
            <th>Dyżurni na obecny tydzień</th>
          </tr>
          {this.state.students.map(student => {
            return (
              <tr>
                <td>{student}</td>
              </tr>
            )
          })}
        </StyledTable>
      </Layout>
    )
  }
}

export default Duties
