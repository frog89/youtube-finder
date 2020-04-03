//import React from 'react';

class YoutubeSearch {
  // Get Channel ID for user:
  // https://www.googleapis.com/youtube/v3/channels?part=snippet&forUsername={0}&key={1}
  // E.g. for Arcade: forUsername='HaatoSK' => ChannelId='UC7vJeI9yNkLec9s_3b9Pnew'

  // Search videos API description:
  // See https://developers.google.com/youtube/v3/docs/search/list?apix=true
  executeSearch(searchText, resultCount, onSearchSuccess, onSearchError) {
    window.gapi.client.youtube.search.list({
      part: "snippet",
      //channelId: 'UC7vJeI9yNkLec9s_3b9Pnew',
      maxResults: resultCount,
      q: searchText
    })
    .then((response) => {
      let videoIds = response.result.items.map((item) => item.id.videoId);
      onSearchSuccess(videoIds);
    }, (response) => {
      let firstError = response.result.error.errors[0].message;
      onSearchError(firstError);
    });
  }

  search(searchText, resultCount, onSearchSuccess, onSearchError) {
    window.authenticate()
      .then(window.loadClient)
      .then(() => {
        this.executeSearch(searchText, resultCount, onSearchSuccess, onSearchError)
      });
  }    
}

export default YoutubeSearch;
