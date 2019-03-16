import React from "react";
//import axios from "axios";
import unsplash from "../api/unsplash_api";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };
  /* 
  - using promise (.then(...)) to handle the ajax resquest

  onSearchSubmit(term) {
    console.log(term);
    axios.get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID 6015711e0afd2166a151bb5f278f7385ec0b13cdaaa99fb8c79f72c9985bb97b"
        }
      })
      .then(response => {
        console.log(response.data.results);
      });
  } */

  /* Handling ajax request with Async Wait */
  onSearchSubmit = async term => {
    console.log(term);
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    //console.log(response.data.results);
    //console.log(this);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {/* - Coummuniating from child to parent component
            - In component SearchBar, _onSubmit can be named anything, 
              unlike in jsx elem ent which is a prop. 
        */}
        <SearchBar _onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
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
