import React from 'react';
import '../styles/OnlineSearch.css'
import axios from 'axios';
import SearchForm from './SearchForm'
import SearchResults from './SearchResults';
import Navigation from './Navigation'
import Footer from './Footer'
import '../styles/OnlineSearch.css'


class OnlineSearch extends React.Component {
  constructor() {
   super();
   this.state = {
     products: [],
     searchValue: ''
   }
  }


  fetchProductData = async () => {
  let { data } = await axios.get(`http://cors-anywhere.herokuapp.com/spendabit.co/api/v0/go?q=${this.state.searchValue}`)
  this.setState({
    products: data.products
  })
  console.log(this.state.products)
  }
  
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchProductData();
    console.log(this.state.searchValue); 
  }
 

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      searchValue: event.target.value
    })    
  }
  
  render(){
    return(
      <div>
        <Navigation />
        <div className="main-online-search">
          <SearchForm onSubmit={this.handleSubmit} searchValue={this.state.searchValue} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
          {this.state.products.map((product, index) => {
            return <SearchResults product={product} key={index} />
          })}   

        </div>
        <Footer />
      </div>
    )
  }  
}
export default OnlineSearch;
