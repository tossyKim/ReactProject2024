import React from "react";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import './components/AirApp.css'


function AirApp(){
    return(
        <div>
            <Header/>
            <Hero/>
            <CardContainer/>
        </div>
        )
}
export default AirApp