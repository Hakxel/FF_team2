import React from 'react';
import Home from './Home';
import About from './About';
import SearchResults from './SearchResults';
import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return(
    <Router>
      <div>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/results" component={SearchResults}/>
        </div>
      </div>
    </Router>
  )
}

export default App
