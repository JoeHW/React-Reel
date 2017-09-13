import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyC4_4ZqcQ4-esb3X5WZbD_I8gccMzOWW3Y';

const App = () => {
    return (
     <div>
      <SearchBar />
     </div>
 )
}

ReactDOM.render(<App />, document.querySelector('.container'));