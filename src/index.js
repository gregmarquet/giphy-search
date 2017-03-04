import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import request from 'superagent';

const url = `http://api.giphy.com/v1/gifs/search?q=money&api_key=dc6zaTOxFJmzC`;

request.get(url, function(err, res) {
  console.log(res.body.data);
})

const App = () => { 
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));