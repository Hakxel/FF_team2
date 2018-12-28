import React from 'react';
import '../styles/MainContent.css'
import axios from 'axios';

class MainContent extends React.Component {
  constructor() {
   super();
   this.state = {
     products: [],
     searchValue: ''
   } 
  }
    
  fetchProductData = async () => {
  let { data } = await axios.get("http://cors-anywhere.herokuapp.com/spendabit.co/api/v0/go?q=" + this.state.searchValue)
    this.setState({
      products: data.products
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      searchValue: event.target.elements.test.value
    })
    this.fetchProductData();
    console.log(this.state.searchValue);
    console.log(this.state.products)
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
            <form className="search-bar ui large fluid action left icon input" onSubmit={this.handleSubmit}>
              <i className="search icon"></i>
              <input type="text" placeholder="Search for product..." name="test" />
              <button className="ui blue button">Search</button>
            </form>            
          </div>
        </div>
      </div>
    )
  }
}

export default MainContent;