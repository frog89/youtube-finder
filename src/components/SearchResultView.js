import React from 'react';
import ResultItemView from './ResultItemView';
import './SearchResultView.css';

class SearchResultView extends React.Component {
  render() {
    const videosJsx = this.props.videoIds.map((videoId, k) => {
      return (
        <ResultItemView key={k} videoId={videoId} />
      )
    });
    return (
      <div>
        <main id="songs" className="container">
          {videosJsx}
        </main>
      </div>
    )
  }

}

export default SearchResultView;