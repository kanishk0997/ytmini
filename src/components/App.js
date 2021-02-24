import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../Apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
class App extends React.Component {

  state = {videos: [], currVid:null};

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search',{
      params:{
        q:term
      }
    });

    this.setState({videos:response.data.items,
    currVid:response.data.items[0]});

  };

  componentDidMount(){
    this.onTermSubmit('music');
  }

  onVideoSelect = (video) => {
    this.setState({currVid:video});
  }

  render(){
    return (
      <div className='ui container'>
        <SearchBar onTermSubmit={this.onTermSubmit}  />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              < VideoDetail video = {this.state.currVid} />
            </div>
            <div className="five wide column">
              < VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </ div>
    );
  }

}


export default App;
