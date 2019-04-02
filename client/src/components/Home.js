import React from 'react'
import '../styles/Home.css'
import Navigation from './Navigation'
import MainContent from './MainContent'
import Footer from './Footer'


const Home = (props) => {
  return(
    <div className="home">
      <div className="main-wrapper">
      <Navigation></Navigation>
      <MainContent homeProps={props}></MainContent>
      </div>
      <div>
      <Footer></Footer>
      </div>
    </div>
  )
}

export default Home
