import React from 'react'
import Home from './Home'
import About from './About'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import OnlineSearch from './OnlineSearch'
import LocalSearch from './LocalSearch'
import '../styles/media.css'

const App = () => {
  return(
    <Router>
        <article>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/local-search" component={LocalSearch}/>
          <Route path="/online-search" component={OnlineSearch}/>
        </article>
    </Router>
  )
}

export default App
