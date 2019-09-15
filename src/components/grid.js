import React, { Component } from "react"
import axios from "axios"

import "./grid.css"

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const url = 'https://cors-anywhere.herokuapp.com/zsktasks-api.herokuapp.com/all';

    axios.get(url)
      .then((response) => {
        this.setState({data: response.data.tasks})
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  renderItems() {
    return this.state.data.map(item => (
      <div key={item.title}>
        <h3>{item.title}</h3>
      </div>
    ));
  }

  render() {
    return <div className="grid">{this.renderItems()}</div>;
  }
}