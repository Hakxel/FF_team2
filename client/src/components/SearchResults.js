import React from 'react';
import Navigation from './Navigation'
import Footer from './Footer'
import '../styles/SearchResults.css'

class SearchResults extends React.Component {
  constructor(props) {
    super()
    // this.state({
    //   productsFound: this.props.results
    // })
    console.log(props)
  }

  render(){
    return(
      <div className="search-results">
        <div>
          <Navigation></Navigation>
        </div>
        <div className="results-wrapper">Main search result contents</div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    )
  }
}

export default SearchResults;