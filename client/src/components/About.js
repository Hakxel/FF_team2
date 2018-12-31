import React from 'react';
import Navigation from './Navigation'
import Footer from './Footer'
import '../styles/About.css'

const About = () => {
  return(
    <div className='all-about'>
      <Navigation></Navigation>
        <div>
          <div className='About-Main'>

            <h1 id='creators'>An introduction to our project</h1>
             <p className='bio'>Virtual currencies like Bitcoin, Ethereum and others are a new and unique way to store value. These crypto-currencies have become increasingly well-known in popular culture, but owners of the currency lack an easy way to search for merchants that accept it. Our application seeks to solve that problem by allowing users to search for products by keyword, rendering a list of merchants where they may use Bitcoin as a method of payment.
             <a href="https://en.wikipedia.org/wiki/Virtual_currency"> Learn more about virtual currency.</a></p>

            <h1 id='creators'>Creators</h1>

                <div className='bio-container'>

                    <div className="image-header">
                      <img className='bio-photo' src='Asiel_Montes02.jpg' alt='Asiel'
                          width={290}
                          height={300}
                        />
                    </div>
                    <div className='bio'>
                      <p>Asiel Montes is a full-stack web developer familiar with HTML, CSS, JavaScript, GIT, React, Express, Ruby and Rails. Asiel has experience working in the travel/tourism industry as well as in the financial sector. Asiel holds a Bachelor's degree in Translation. His communication skills are excellent and spoken languages include fluency in Spanish, English and French.
                       <a href="http://www.linkedin.com/in/asiel-montes-27b95612a"> Connect with Asiel.</a></p>
                    </div>

                </div>

                <div className='bio-container'>

                    <div className="image-header">
                      <img className='bio-photo' src='Alvaro_Vargas01.jpeg' alt='Alvaro'
                        width={290}
                        height={300}>
                      </img>
                    </div>
                    <div className='bio'>
                      <p>Alvaro Vargas is a junior web developer currently expanding his proficiency in HTML, CSS, JavaScript, and React at Wyncode Academy. He is an experienced Program Manager in the field of educational non-profit youth services.
                      <a href="http://www.linkedin.com/in/alvaro-vargas-910"> Connect with Alvaro.</a></p>
                    </div>

                </div>

                <div className='bio-container'>

                    <div className="image-header">
                        <img className='bio-photo' src='Jamie_Damon01.jpg' alt='Jamie'
                            width={290}
                            height={300}
                          />
                    </div>
                    <div className='bio'>
                      <p>Jamie Damon is a full stack web developer with an extensive background in financial services and client engagement. His current technology experience includes work with HTML, CSS, JavaScript, jQuery, and React. His knowledge of GIT facilitates efficient management of web development projects. Current and previous work with teams has led to quality results in a project focused agile development environment.
                      <a href="http://www.linkedin.com/in/jamieldamon"> Connect with Jamie.</a></p>
                    </div>

                </div>

              </div>
          </div>
        <Footer></Footer>
    </div>
  )
}

export default About
