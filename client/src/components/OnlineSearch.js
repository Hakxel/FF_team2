import React from 'react';
import '../styles/OnlineSearch.css'
import axios from 'axios';
import SearchForm from './SearchForm'
import SearchResults from './SearchResults';
import Navigation from './Navigation';
import Footer from './Footer';
import '../styles/OnlineSearch.css';
import NoResultsFound from './NoResultsFound';


class OnlineSearch extends React.Component {
  constructor() {
   super();
   this.state = {
     products: [],
     searchValue: '',
     noResults: false
   }
  }


  fetchProductData = async () => {
  let { data } = await axios.get(`http://cors-anywhere.herokuapp.com/spendabit.co/api/v0/go?q=${this.state.searchValue}`)
  this.setState({
    products: data.products,
    noResults: false
  })
  if(data.products.length === 0){
    this.setState({noResults: true})
  }
  console.log(this.state.products);
  if (Array.isArray(this.state.products) && this.state.products.length === 0){
    console.log(`no results returned: ${this.state.products.length} and ${this.handleSubmit}`);
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
      <div className='main-online-search'>
        <Navigation />
        <div>
          <div id='main-titles'>
            <h1>bitworld buys</h1>
            <h2>search products worldwide</h2>
          </div>
          <div>
            <SearchForm onSubmit={this.handleSubmit} searchValue={this.state.searchValue} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
          </div>
          <div>
            {this.state.noResults ? <NoResultsFound /> : null}
          </div>
          <div>
               {this.state.products.map((product, index) => {
                 return <SearchResults product={product} key={index} />
               })}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default OnlineSearch;
