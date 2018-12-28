import React from 'react';
import Navigation from './Navigation'
import Footer from './Footer'
import '../styles/SearchResults.css'

class SearchResults extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productsFound: null

    }
    console.log('this is the props content: ' + props.results)
    console.log('this is the productsFound content: ' + this.state.productsFound)
  }
 
  render(){
    return(
      <div><p>{this.props.product.name}</p></div>
    )
  }
}

export default SearchResults;

{/* <div className="search-results">
  <div>
    <Navigation></Navigation>
  </div>
  <div className="results-wrapper"></div>
  <div>
    <Footer></Footer>
  </div>
</div> */}