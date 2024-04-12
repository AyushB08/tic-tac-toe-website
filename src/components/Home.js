import React from 'react'
import "./HomeStyles.css"
import Navbar from "./Navbar"
import Hero from './Hero'
import About from "./About"
import AIBoard from './AIBoard'
import PlayerBoard from './PlayerBoard'



const Home = () => {
    return (
        <div id ="home">
            <Navbar/>
            <Hero/>
            <About/>
            <AIBoard/>
            <PlayerBoard/>
            
        </div>
    )
}
export default Home