import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchTermSubmit();
  }

  onSearchTermSubmit = async searchTerm => {
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
    console.log("From the App", video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar _onFormSubmit={this.onSearchTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                _onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

/* 
Things to remember/understand

- this.onVideoSelect is a user defined callback method, 
  which then passed down as a prop(_onVideoSelect) down to the VideoList.
  The VideoList in turn pass the down to the VideoItem.
  Whenever a user clicked on a VideoItem we invoked that callback which essentially 
  sent some communication back up to the App Component.

- Remember when we are communicating from a parent down to a child, we can do that very
  easily with the props system, But anytime that we want to communicate from a Child back up 
  to some Parent Component we usually make use of a "callback" Function, which is explained in above point.

*/
