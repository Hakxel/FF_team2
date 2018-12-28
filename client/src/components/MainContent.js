import React from 'react';
import '../styles/MainContent.css'
import axios from 'axios';
import SearchForm from './SearchForm'
// import SearchResults from './SearchResults'
import  {Redirect} from 'react-router-dom';

class MainContent extends React.Component {
  constructor() {
   super();
   this.state = {
     products: false,
     searchValue: ''
<<<<<<< HEAD
   }
  }
=======
   } 
  } 
  
>>>>>>> asiel-home

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

  renderResults(){
    if(this.state.products) {
      return(
        <Redirect to="/results" />
      )
      
    }
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
<<<<<<< HEAD
            <form className="search-bar ui large fluid action left icon input" onSubmit={this.handleSubmit}>
              <i className="search icon"></i>
              <input type="text" placeholder="Search for product..." name="test" />
              <button className="ui blue button">Search</button>
            </form>
=======
            <SearchForm onSubmit={this.handleSubmit} searchValue={this.state.searchValue} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>           
>>>>>>> asiel-home
          </div>
        </div>
        {this.renderResults()}        
      </div>
    )
  }
}

export default MainContent;
