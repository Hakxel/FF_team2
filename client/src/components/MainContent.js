import React from 'react';
import '../styles/MainContent.css'
import axios from 'axios';
import SearchForm from './SearchForm'

class MainContent extends React.Component {
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
    this.fetchProductData()
    
    console.log(this.state.searchValue);
    
  }
  
  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      searchValue: event.target.value
    })    
  }

  render(){
    return (
      <div className="main-content">
        <div className="hero">
          <div>
          <h1>Bitworld Shopper</h1>
          <h2>A global currency, a world of possibilities...</h2>
          </div>
          <div className="what-to-buy">
            <h2>What can I buy with bitcoin?</h2>
            <SearchForm onSubmit={this.handleSubmit} searchValue={this.state.searchValue} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>           
          </div>
        </div>
      </div>
    )
  }
}

export default MainContent;