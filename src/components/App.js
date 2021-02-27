import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
// import axios from "axios";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount() {
    this.onTermSubmit("buildings");
  }
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    // const response = await axios.get(
    //   "https://www.googleapis.com/youtube/v3/search",
    //   {
    //     params: {
    //       q: term,
    //       part: "snippet",
    //       maxResults: 5,
    //       key: "AIzaSyC4L30thGoeWial87chrfR0Uhg0mfKAdQI",
    //     },
    //   }
    // );
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="App ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
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
