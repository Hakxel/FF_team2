import React from 'react';
import '../styles/SearchResults.css';


class SearchResults extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productsFound: null,
    }

    console.log('this is the props content: ' + props.results)
    console.log('this is the productsFound content: ' + this.state.productsFound)
  }

  render(){

    return(

      <div>
        <div className="product">
          <div id="thumbnail">
            <img src={this.props.product.thumbnailURL} alt="not available" />
          </div>
          <div id="product-name">
            <a href={this.props.product.url}><p>{this.props.product.name}</p></a>
          </div>
          <div className="product-detail">
            <p id="product-info">Merchant: {this.props.product.merchantName}</p>
            <p id="product-info">Price(USD): {this.props.product.priceAsString}</p>
            <a href={this.props.product.url} id="product-info">Buy it with Bitcoin!</a>
          </div>
        </div>
      </div>
    )
  }
}
export default SearchResults;
