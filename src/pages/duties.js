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
      duties: [],
    }
  }

  componentDidMount() {
    axios.get("https://zsktasks-api.herokuapp.com/duties").then(res => {
      if (res.data.duties) {
        this.setState({
          duties: res.data.duties,
        })
      }
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Dyżurni" />
        <h1>Dyżurni</h1>
        <StyledTable>
          <thead>
            <tr>
              <th colSpan={this.state.duties.length}>
                Dyżurni na obecny tydzień
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dyżurny 1</td>
              <td>Dyżurny 2</td>
            </tr>
            <tr>
              {this.state.duties.map((duty, i) => {
                return (
                  <td key={duty.name}>
                    <b>{duty.name}</b>
                  </td>
                )
              })}
            </tr>
          </tbody>
        </StyledTable>
      </Layout>
    )
  }
}

export default Duties
