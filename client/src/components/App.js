import React from 'react'
import '../styles/media.css'
import Home from './Home'
import About from './About'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import OnlineSearch from './OnlineSearch'
import LocalSearch from './LocalSearch'

const App = () => {
  return(
    <Router>
      <div>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/local-search" component={LocalSearch}/>
          <Route path="/online-search" component={OnlineSearch}/>
        </div>
      </div>
    </Router>
  )
}

export default App
