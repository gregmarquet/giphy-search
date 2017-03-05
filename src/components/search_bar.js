import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

  }

  componentDidMount(){
    const keyword = 'happy';
    // this.setState({ term:keyword });
    this.search(keyword);
  }

  handleInputChange(e){
    const keyword = e.target.value;
    this.setState({term:keyword});
    this.search(keyword); 
  }

  search(keyword){
    this.props.searchCallback(keyword);
    console.log(keyword);
  }

  render() {
    return (
      <div>
        <input
        value={this.state.term}
        onChange={this.handleInputChange.bind(this)} />
      </div>
    );
  }
}

export default SearchBar;





