import React from 'react';
import axios from 'axios'
import Navigation from './Navigation';
import MainContent from './MainContent';
import Footer from './Footer';


class Home extends React.Component {
  constructor(props){
    super()
    this.state = {
      venues: [],
      homeProps: this.props
    }
  }

  async componentDidMount() {
    let { data } = await axios.get("/localsearch")
    this.setState({
      venues: data
    })
  }


  render() {
    return(
      <div className="home">
        <div className="main-wrapper">
        <Navigation></Navigation>
        <MainContent homeProps={this.state.homeProps} venues={this.state.venues}></MainContent>
        </div>
        <div>
        <Footer></Footer>
        </div>
      </div>
    )
  }  
}

export default Home
