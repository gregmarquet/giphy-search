import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
    this.hInput;
  }

  componentDidMount(){
    const keyword = 'cats';
    this.search(keyword);
  }

  handleInputChange(e){
    this.setState({term:keyword});
    const keyword = e.target.value;
    clearTimeout(this.hInput);
    this.hInput = setTimeout(this.search.bind(this, keyword), 300); 
  }

  search(keyword){
    this.props.searchCallback(keyword);
  }

  render() {
    return (
      <div className="search-bar">
        <input
        className="search-input"
        value={this.state.term}
        onChange={this.handleInputChange.bind(this)} />
      </div>
    );
  }
}

export default SearchBar;





