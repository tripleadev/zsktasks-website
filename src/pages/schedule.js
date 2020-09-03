import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"

import styled from "styled-components"
import axios from "axios"
import moment from "moment"

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

class Notebook extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      days: [],
    }
  }

  componentDidMount() {
    axios
      .get("https://zsktasks-api.herokuapp.com/notebookSchedule")
      .then(res => {
        this.setState({
          days: res.data,
        })
      })
  }

  render() {
    return (
      <Layout>
        <SEO title="Harmonogram zeszytu" />
        <h1>Harmonogram zeszytu</h1>
        <StyledTable>
          <tr>
            <th>Dzień</th>
            <th>Osoba</th>
            <th>Adnotacje</th>
          </tr>
          {this.state.days.map(day => {
            return (
              <tr>
                <td>{moment(day.date).format("DD-MM-YYYY")}</td>
                <td>{day.name}</td>
                <td>{day.comment}</td>
              </tr>
            )
          })}
        </StyledTable>
      </Layout>
    )
  }
}

export default Notebook
