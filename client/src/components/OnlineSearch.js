import React from 'react'
import '../styles/OnlineSearch.css'
import axios from 'axios'
import SearchForm from './SearchForm'
import Navigation from './Navigation'
import Footer from './Footer'
import JwPagination from 'jw-react-pagination'

class OnlineSearch extends React.Component {
  constructor(props) {
    super(props)  
    this.state = {
      products: [],
      searchValue: '',
      noResults: false,
      pageOfItems: []
    }
  }

  onChangePage = (pageOfItems) => {
    this.setState({ pageOfItems })
  }

  fetchProductData = async () => {
  let { data } = await axios.get(`/onlinesearch/${this.state.searchValue}`)
  this.setState({
    products: data,
  })
  if(data.length === 0){
    this.setState({noResults: true})
  }
  console.log(this.state.products);
  if (Array.isArray(this.state.products) && this.state.products.length === 0){
    console.log(`no results returned: ${this.state.products.length}`);
  }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchProductData();
    console.log(this.state.searchValue);
  }


  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      searchValue: event.target.value,
    })
  }

  render(){
    return(
      <div>
        <Navigation />
        <div className='main-online-search'>
          <div id='main-titles'>
            <h2>Search Products Worldwide</h2>
          </div>
          <div>
            <SearchForm onSubmit={this.handleSubmit} searchValue={this.state.searchValue} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
          </div>
          <div>
            {this.state.noResults ? <div className='no-results'><p> Your search for "{this.state.searchValue}" returned no results.</p><p>Please check your spelling or enter keywords that are a little less... weird.</p></div> : null}
          </div>
          <div>
            {this.state.pageOfItems.map(item =>
              <div key={item.id}>
                <div>
                  <div className="product">
                    <div id="thumbnail">
                      <img src={item.thumbnailURL} alt="not available" />
                    </div>
                    <div id="product-name">
                      <a href={item.url} target={"_blank"}><p>{item.name}</p></a>
                    </div>
                    <div className="product-detail">
                      <p id="product-info">Merchant: {item.merchantName}</p>
                      <p id="product-info">Price(USD): {item.priceAsString}</p>
                      <a href={item.url} target={"_blank"} id="product-info">Buy it with Bitcoin!</a>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <JwPagination items={this.state.products} onChangePage={this.onChangePage} disableDefaultStyles={true} />
          </div>

        </div>
        <Footer />
      </div>
    )
  }
}
export default OnlineSearch
