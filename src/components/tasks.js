import React from "react"
import axios from "axios"
import { format } from "light-date"

import "./tasks.css"
import Filters from "./filters"

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

    console.log("over")

    window.localStorage.setItem("overallGroup", val)
  }

  setGermanGroup(val) {
    this.setState({ germanGroup: val })

    console.log("german")

    window.localStorage.setItem("germanGroup", val)
  }

  applyFilters(array) {
    return array.filter(el => {
      if (
        (el.subject === "Język Niemiecki Gr. 2" &&
          this.state.germanGroup === "1") ||
        (el.subject === "Język Niemiecki Gr. 1" &&
          this.state.germanGroup === "2") ||
        (el.subject.includes("2") &&
          !el.subject.includes("Język Niemiecki") &&
          this.state.overallGroup === "1") ||
        (el.subject.includes("1") &&
          !el.subject.includes("Język Niemiecki") &&
          this.state.overallGroup === "2")
      ) {
        return false
      } else {
        return true
      }
    })
  }

  renderItems() {
    if (!this.state.error) {
      const filtered = this.applyFilters(this.state.data)

      return filtered.map(item => (
        <div className="gridItem" key={item._id}>
          <h2>{item.title}</h2>
          <div className="details">
            <h5>{item.subject}</h5>
            <h5>{format(new Date(item.date), "{dd}.{MM}.{yyyy}")}</h5>
          </div>
          <p>{item.description}</p>
        </div>
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
        <div className="grid">{this.renderItems()}</div>
      </div>
    )
  }
}
