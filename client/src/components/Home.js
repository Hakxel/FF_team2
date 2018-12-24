import React from 'react';
import Navigation from './Navigation';
import MainContent from './MainContent';
import Footer from './Footer';


const Home = () => {
  return(
    <div>
      <Navigation></Navigation>
      <MainContent></MainContent>
      <Footer></Footer>
    </div>
  )
}

export default Home