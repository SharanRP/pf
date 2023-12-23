import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import intro from '../LottieFiles/intro.json'

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
          Hi, my name is <b>Sharan Poojari</b> and I am from Mumbai, India, currently studying in my second year of BTech IT at VJTI.
I'm a passionate coder who codes for fun and enjoys exploring different technologies.
Currently, I am honing my skills and always on the lookout for exciting coding challenges.
In my spare time, I like to work on personal projects just for the joy of coding. You can check out some of my experiments and mini-projects in the projects section.
Although I'm in my early years of college, I've already started making my mark in the coding world. 
I'm always open to new collaborations or projects where I can contribute and continue to grow. Feel free to connect with me; you can find my contact details in the footer.
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={intro} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Python' />
        <Skills skill='Tailwind' />
      </div>
    </>
  )
}

export default About