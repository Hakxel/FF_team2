import React from 'react';
import Home from './Home';
import About from './About';
import Search from './Search';

import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return(
    <Router>
      <div>
        <div>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          {/* <Route path="/search" component={Search}></Route> */}
        </div>
      </div>
    </Router>
  )
}

export default App