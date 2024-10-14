import React from 'react'
import Navbar from '../components/Navbar'
import Banner from './Banner'
import Services from './Services'
import Who from './Who'
import Footer from './Footer'
import Form from './Form'
import Spinner from './Spinner'
import Carousel from './Carousel'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Services/>
      <Who/>
      <Carousel/>
      <Form/>
      <Footer/>
      <Spinner/>
    </div>
  )
}

export default Home
