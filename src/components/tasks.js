import React from "react"
import axios from "axios"
import { format } from "light-date"
import styled from "styled-components";

import Filters from "./filters"
import { getGroupCombined, groups, getGroupType } from "../utils/groups"

const Grid = styled.div`
  margin-top: 2em;
  display: grid;
  width: 100%;

  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 30px;
  grid-row-gap: 40px;
`

const GridItem = styled.div`
  padding: 10px;
  border: 3px solid #707070;
  height: 300px;
  overflow: auto;

  *:not(:first-child) {
    margin-top: 10px;
  }
`

const Details = styled.div`
  display: flex;
  width: 100%;

  *:not(:first-child) {
    margin: 0 0 0 15px;
  }
`

export default class Tasks extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: "",
      data: [],
      germanGroup: "",
      overallGroup: "",
    }

    this.setGermanGroup = this.setGermanGroup.bind(this)
    this.setOverallGroup = this.setOverallGroup.bind(this)
    this.applyFilters = this.applyFilters.bind(this)
  }

  componentDidMount() {
    axios
      .get("https://zsktasks-api.herokuapp.com/tasks")
      .then(response => {
        this.setState({ data: response.data.tasks })
      })
      .catch(error => {
        this.setState({ error: error })
      })

    const overallGroupSaved = window.localStorage.getItem("overallGroup") || ""
    const germanGroupSaved = window.localStorage.getItem("germanGroup") || ""

    this.setState({
      germanGroup: germanGroupSaved,
      overallGroup: overallGroupSaved,
    })
  }

  setOverallGroup(val) {
    this.setState({ overallGroup: val })

    window.localStorage.setItem("overallGroup", val)
  }

  setGermanGroup(val) {
    this.setState({ germanGroup: val })

    window.localStorage.setItem("germanGroup", val)
  }

  applyFilters(array) {
    const { germanGroup, overallGroup } = this.state

    return array.filter(el => {
      switch (getGroupCombined(el.subject)) {
        case germanGroup:
          return true
        case overallGroup:
          return true
        case null:
          return true
        default:
          switch (getGroupType(el.subject)) {
            case groups.TYPE_GERMAN:
              return !germanGroup
            case groups.TYPE_OVERALL:
              return !overallGroup
            default:
              return false
          }
      }
    })
  }

  renderItems() {
    if (!this.state.error) {
      const filtered = this.applyFilters(this.state.data)

      return filtered.map(item => (
        <GridItem key={item._id}>
          <h2>{item.title}</h2>
          <Details>
            <h5>{item.subject}</h5>
            <h5>{format(new Date(item.date), "{dd}.{MM}.{yyyy}")}</h5>
          </Details>
          <p>{item.description}</p>
        </GridItem>
      ))
    } else return <p>{this.state.error}</p>
  }

  render() {
    return (
      <div>
        <Filters
          setGermanGroup={this.setGermanGroup}
          setOverallGroup={this.setOverallGroup}
          overallGroup={this.state.overallGroup}
          germanGroup={this.state.germanGroup}
        />
        <Grid>{this.renderItems()}</Grid>
      </div>
    )
  }
}
