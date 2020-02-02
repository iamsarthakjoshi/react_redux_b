import React, { Component } from "react";

export default class WeatherBit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {}

  render() {
    return <div />;
  }
}
