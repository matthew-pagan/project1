import React, { useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();


function YoutubeSearch(props) {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState(props.defaultQuery);

  const onInputChange = (event) => {
    setQuery(event.target.value);
  };

  const searchYoutube = async (query) => {
    try {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      setVideos(response.data.items);
    } 
    catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div>
      <div className="col-8 mx-auto">
        <input type="text" className="form-control" placeholder="Enter a search term" value={query} onChange={onInputChange} />
      </div>
      <div className="form-group">
        <button className="btn btn-danger btn-sm" onClick={() => searchYoutube(query)}>Youtube</button>
      </div>
    </div>
  );
}

export default YoutubeSearch;



// render() {
//   return (
//     <div>
//       <input type="text" placeholder="Enter a search term" value={this.state.query} onChange={(event) => this.setState({ query: event.target.value })} />
//       <button className='btn btn-danger' onClick={() => this.searchYoutube(this.state.query)}>Youtube</button>
//       {this.state.videos.map((video) => (
//         <div key={video.id.videoId}>
//           <h3>{video.snippet.title}</h3>
//           <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
//         </div>
//       ))}
//     </div>
//   );
// }
