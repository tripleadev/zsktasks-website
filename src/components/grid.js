import React, { Component } from "react"
import axios from "axios"

import "./grid.css"

export default class Grid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: "",
      data: [],
    }
    this.componentDidMount.bind(this)
  }

  componentDidMount() {
    const url =
      "https://cors-anywhere.herokuapp.com/zsktasks-api.herokuapp.com/all"

    axios
      .get(url)
      .then(response => {
        this.setState({ data: response.data.tasks })
      })
      .catch(function(error) {
        this.setState({ error: error })
      })
  }

  renderItems() {
    if (!this.state.error) {
      return this.state.data.map(item => (
        <div className="gridItem" key={item.title}>
          <h3>{item.title}</h3>
          <h6>{item.subject}</h6>
          <h6>{item.date}</h6>
          <p>{item.description}</p>
        </div>
      ))
    } else return <p>{this.state.error}</p>
  }

  render() {
    return <div className="grid">{this.renderItems()}</div>
  }
}
