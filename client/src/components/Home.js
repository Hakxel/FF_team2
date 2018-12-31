import React from 'react';
import Navigation from './Navigation';
import MainContent from './MainContent';
import Footer from './Footer';


const Home = () => {
  return(
    <div className="home">
      <div className="main-wrapper">
      <Navigation></Navigation>     
      <MainContent></MainContent>
      </div>
      <div>
      <Footer></Footer>
      </div>
    </div>
  )
}

export default Home
