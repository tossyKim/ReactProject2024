import React from "react";
import bgImage from './images/images1.jpg'
import './AirApp.css'

function Hero(){
    return(
        <div className="hero" style={{backgroundImage:`url(${bgImage})`}}>
            <h1>특별한 숙소를 예약하세요</h1>
            <p>에어비앤비에서 독특한 숙소를 찾아보세요.</p>
        </div>
    )
}
export default Hero