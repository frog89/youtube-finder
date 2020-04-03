import React from 'react';

class SearchInputView extends React.Component {
  state = {
    searchText: ''
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchTextChange(this.state.searchText);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="searchInput">Search your favorite artist</label>
          <input type="text" id="searchInput" 
            onChange={(event) => this.setState({searchText: event.target.value})}
            value={this.state.searchText} />
          <button>Search</button>
        </form>
        <hr/>
      </div>
    )
  }
}

export default SearchInputView;