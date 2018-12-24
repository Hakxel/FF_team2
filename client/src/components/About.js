import React from 'react';
import Navigation from './Navigation'
import Footer from './Footer'

const About = () => {
  return(
    <div>
      <Navigation></Navigation>
        <div>
          <div id='About-Main'>
            <h1>Creators</h1>
            <div class="ui placeholder">

                <div id='Asiel'>
                  <p>Asiel Montes</p>
                  <div class="image header">
                    <img src='http://placekitten.com/200/300'></img>
                  </div>

                </div>
                <div id='Alvaro'>
                  <p>Alvaro Vargas</p>
                  <div class="image header">
                    <img src='http://placekitten.com/200/300'></img>
                  </div>
                </div>
                <div id='Jamie'>
                  <p>Jamie Damon</p>
                    <div class="image header">
                      <img src='http://placekitten.com/200/300'></img>
                    </div>
                    <p>Jamie is Full Stack Web Developer with an extensive background in financial services and client engagement. His current technology experience includes work with HTML, CSS, JavaScript, jQuery, and React. Proficiency with GIT accommodates efficient management of web development projects. Current and previous work with teams has led to quality results in a project focused agile development environment.</p>
                </div>
              </div>
          </div>
        </div>
      <Footer></Footer>
    </div>
  )
}

export default About
