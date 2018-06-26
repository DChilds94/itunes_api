import React from 'react';
import TopTwenty from "../components/TopTwenty.js"

class ItunesBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topTwenty: [],
      song: null
    }
  }

  componentDidMount(){
  const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
  const request = new XMLHttpRequest();
  request.open("GET", url)
  request.addEventListener("load", () => {
    if (request.status !== 200) return;
    const topTwenty = JSON.parse(request.response)
    this.setState({topTwenty: topTwenty.feed.entry})
  })
  request.send();
  }

  render(){
    return (
      <div>
        <TopTwenty topTwenty={this.state.topTwenty}/>
      </div>
    )
  }
}

export default ItunesBox
