import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import GiphList from './components/giph_list';


var giphy = require('giphy-api')();

class App extends Component { 
  constructor(props){
    super(props);

    this.state = { giphs: [] };

  }

  giphySearch(keyword){
    const self = this;
    giphy.search(keyword, function (err, res) {
      if(res && res.data){
        self.setState({ giphs:res.data });
      }
    });
  }

  render() {
    return (
      <div>
        <SearchBar searchCallback={this.giphySearch.bind(this)} />
        <GiphList giphs={this.state.giphs} />
      </div>
    );
  }
  
}

ReactDOM.render(<App />, document.querySelector('.container'));