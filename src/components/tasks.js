import React from "react"
import axios from "axios"
import { format } from "light-date"

import "./tasks.css"

export default class Tasks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: "",
      data: [],
    }
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
  }

  renderItems() {
    if (!this.state.error) {
      return this.state.data.map(item => (
        <div className="gridItem" key={item.id}>
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
    return <div className="grid">{this.renderItems()}</div>
  }
}
