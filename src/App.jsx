import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedGrid from './components/FeaturedGrid'
import Footer from './components/Footer'

export default function App(){
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedGrid />
      <Footer />
    </>
  )
}
