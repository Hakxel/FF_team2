import React from 'react';
import Navigation from './Navigation'
import Footer from './Footer'
import '../styles/About.css'

const About = () => {
  return(
    <div className='about'>
      <Navigation></Navigation>
      <div className='about-main'>
        <h1 className='intro'>An introduction to our project</h1>
        <div className='content'>
          <p>Virtual currencies like Bitcoin, Ethereum and others are a new and unique way to store value. These crypto-currencies have become increasingly well-known in popular culture, but owners of the currency lack an easy way to search for merchants that accept it. Our application seeks to solve that problem by allowing users to search for both online products and physical stores where Bitcoin is a valid method of payment. <a href="https://en.wikipedia.org/wiki/Virtual_currency"
          target="_blank" rel="noopener noreferrer" >Learn more about virtual currency.</a></p>
        </div>
        <div>
          <h1 id='creators'>Creators</h1>
          <div className='bio-container'>
            <div className="image-header">
              <img className='bio-photo' src='Asiel_Montes02.jpg' alt='Asiel' width={290} height={300} />
            </div>
            <div className='content'>
              <p>Asiel Montes is a full-stack web developer familiar with HTML, CSS, JavaScript, GIT, React, Express, Ruby and Rails. Asiel has experience working in the travel/tourism industry as well as in the financial sector. Asiel holds a Bachelor's degree in Translation. His communication skills are excellent and spoken languages include fluency in Spanish, English and French. <a href="http://www.linkedin.com/in/asiel-montes-27b95612a" target="_blank" rel="noopener noreferrer">Connect with Asiel.</a></p>
            </div>
          </div>
          <div className='bio-container'>
            <div className='image-header'>
              <img className='bio-photo' src='Alvaro_Vargas01.jpeg' alt='Alvaro' width={290} height={300} />
            </div>
            <div className='content'>
              <p>Alvaro Vargas is a junior web developer currently expanding his knowledge in HTML, CSS, JavaScript, and React at Wyncode Academy. He is an experienced Program Manager in the field of educational non-profit youth services. <a href="http://www.linkedin.com/in/alvaro-vargas-910" target="_blank" rel="noopener noreferrer">Connect with Alvaro.</a></p>
            </div>
          </div>
          <div className='bio-container'>
            <div className="image-header">
              <img className='bio-photo' src='Jamie_Damon01.jpg' alt='Jamie' width={290} height={300} />
            </div>
            <div className='content'>
              <p>Jamie Damon is a full stack web developer with a background in financial services and client engagement. His current technology experience includes work with HTML, CSS, JavaScript, jQuery, and React. Current and previous work with teams has led to quality results in a project focused agile development environment. <a href="http://www.linkedin.com/in/jamieldamon" target="_blank" rel="noopener noreferrer">Connect with Jamie.</a></p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default About
