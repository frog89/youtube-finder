import React from 'react'
import SearchInputView from './SearchInputView';
import SearchResultView from './SearchResultView';
import YoutubeSearch from './YoutubeSearch';

class App extends React.Component {
  state = {
    searchText: '',
    videoIds: [],
    searchError: ''
  }

  onSearchSuccess = (videoIds) => {
    this.setState({ videoIds });
  }

  onSearchError = (firstError) => {
    this.setState({ searchError: firstError });
  }

  onSearchTextChange = (text) => {
    this.setState({searchText: text});
    let s = new YoutubeSearch();
    s.search(text, 10, this.onSearchSuccess, this.onSearchError);
  }

  render() {
    return (
      <div>
        <header>
          <h1>Song Finder</h1>
          <SearchInputView onSearchTextChange={this.onSearchTextChange}/>
          {
            this.state.searchError.length > 0 ? 
            <div style={{color: 'red'}}>{this.state.searchError}</div> :
            <SearchResultView videoIds={this.state.videoIds} />
          }
        </header>
      </div>
    )
  }
}

export default App;