import React, { Component } from "react";
import "./App.css";
import Weather from "./components/Weather";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  async componentDidMount() {
    const API_KEY = "wSo0LRcHZMmsh4rXshasAImNK7Ulp19zkGQjsnUjeMXsnpyilC";
    let URL = "https://weatherbit-v1-mashape.p.mashape.com/forecast/";
    const latLong = "daily?lat=-33.8688&lon=151.2093";
    URL += latLong;
    const response = await fetch(URL, {
      headers: { "X-Mashape-Key": API_KEY }
    });
    const data = await response.json();
    console.log(data.data);
    this.setState({
      items: data.data,
      isLoaded: true
    });

    // list datas
  }

  render() {
    var { isLoaded, items } = this.state;

    if (isLoaded) {
      return (
        <div className="container">
          <Weather data={items} />
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="ui segment">
            <div className="ui active inverted dimmer">
              <div className="ui text loader">Loading</div>
            </div>
          </div>
        </div>
      );
    }
  }
}
