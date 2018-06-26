import React from "react";
import Song from "./Song.js"

class TopTwenty extends React.Component {
render() {

  const topTwentyList = this.props.topTwenty.map((song, index => (
    <li key={["feed.entry.id.im:id"]} value={index}>
      {song.entry}
    </li>
  )))
// ))
// )
    return(
      <div>
        <Song />
        {topTwentyList}
      </div>
    )
  }

}


export default TopTwenty;
