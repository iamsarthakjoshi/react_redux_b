import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {/* In component SearchBar, _onSubmit can be named anything, 
            unlike in jsx element which is a prop. 
        */}
        <SearchBar _onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

/* const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar />
    </div>
  );
}; */

export default App;
