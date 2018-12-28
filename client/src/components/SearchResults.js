import React from 'react';
import Navigation from './Navigation'
import Footer from './Footer'

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
        <div className="results-wrapper">
          <Navigation></Navigation>
        </div>
        <div>Main search result contents</div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    )
  }
}

export default SearchResults;