import React from 'react'
import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [PlayState, setPlayState] = useState(false)
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our PROGRAM' title="What we Offer" />
        <Program />
        <About setPlayState={setPlayState} />
        <Title subTitle='Gallary' title="Campus Photos" />
        <Campus />
        <Title subTitle='TESTIMONIALS' title="What Students Says" />
        <Testimonials />
        <Title subTitle='Contact Us' title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer PlayState={PlayState} setPlayState={setPlayState} />

    </div>
  )
}

export default App
