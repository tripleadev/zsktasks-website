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
    const url = "https://zsktasks-api.herokuapp.com/all"

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
        <div className="gridItem" key={item.id}>
          <h2>{item.title}</h2>
          <div className="details">
            <h5>{item.subject}</h5>
            <h5>{item.date}</h5>
          </div>
          <p>{item.description}</p>
        </div>
      ))
    } else return <p>{this.state.error}</p>
  }

  render() {
    return <div className="grid">{this.renderItems()}</div>
  }
}
