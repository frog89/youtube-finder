import React from 'react';

class ResultItemView extends React.Component {
  render() {
    const url = `https://www.youtube.com/embed/${this.props.videoId}`;
    return (
      <iframe className="item" title={this.props.videoId}
        src={url}
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        />
    )
  }
}

export default ResultItemView;