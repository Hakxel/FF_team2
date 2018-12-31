import React from 'react';
import '../styles/OnlineSearch.css'
import axios from 'axios';
import SearchForm from './SearchForm'
import SearchResults from './SearchResults';
import Navigation from './Navigation';
import Footer from './Footer';
import '../styles/OnlineSearch.css';
import TextLoop from 'react-text-loop';
import NoResultsFound from './NoResultsFound';
import { Alert } from 'react';


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
  console.log(this.state.products);
  if (this.state.products==0){
    console.log('no results returned');
    return(<NoResultsFound />)
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
            <h2>the future of {' '}
            <TextLoop interval={3000}>
                <span>global</span>
                <span>local</span>
            </TextLoop>
             {' '}currency. today.
            </h2>
          </div>
          <div>
            <SearchForm onSubmit={this.handleSubmit} searchValue={this.state.searchValue} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
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
