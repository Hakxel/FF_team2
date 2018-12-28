import React from 'react';
import Navigation from './Navigation'
import Footer from './Footer'
import '../styles/About.css'

const About = () => {
  return(
    <div>
      <Navigation></Navigation>
        <div>
          <div class='About-Main'>

            <h1 id='creators'>Creators</h1>

                <div class='bio-container'>

                    <div class="image-header">
                      <img class='bio-photo' src='Asiel_Montes02.jpg' alt='Asiel'
                          width={290}
                          height={300}
                        />
                    </div>
                    <div class='bio'>
                      <p>Asiel Montes</p>
                    </div>

                </div>

                <div class='bio-container'>

                    <div class="image-header">
                      <img class='bio-photo' src='Alvaro_Vargas01.jpeg' alt='Alvaro'
                        width={290}
                        height={300}>
                      </img>
                    </div>
                    <div class='bio'>
                      <p>Alvaro Vargas</p>
                    </div>

                </div>

                <div class='bio-container'>

                    <div class="image-header">
                        <img class='bio-photo' src='Jamie_Damon01.jpg' alt='Jamie'
                            width={290}
                            height={300}
                          />
                    </div>
                    <div class='bio'>
                      <p>Jamie Damon is Full Stack Web Developer with an extensive background in financial services and client engagement. His current technology experience includes work with HTML, CSS, JavaScript, jQuery, and React. His knowledge of GIT facilitates efficient management of web development projects. Current and previous work with teams has led to quality results in a project focused agile development environment.</p>
                    </div>

                </div>

              </div>
          </div>
        <Footer></Footer>
    </div>
  )
}

export default About
