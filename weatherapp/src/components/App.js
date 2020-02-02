import React from "react";
import NextDaysWeather from "./NextDaysWeather";
import TodaysWeather from "./TodaysWeather";

class App extends React.Component {
  render() {
    return (
      <div className="mainApp">
        <TodaysWeather />
        <NextDaysWeather />
      </div>
    );
  }
}

export default App;
