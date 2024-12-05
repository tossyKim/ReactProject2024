import React from "react";
import aptimg from './images/aptimg1.png'
import img2 from './images/images2.jpg'
import img3 from './images/images3.jpg'
import './AirApp.css'

const listings = [
    {
        id:1,
        title : "서울의 아늑한 아파트",
        price : 1000000,
        rating : 4.9,
        imageUrl : `${aptimg}`
    },
    {
        id:2,
        title : "오션뷰1",
        price : 2000000,
        rating : 5.9,
        imageUrl : `${img2}`
    },
    {
        id:3,
        title : "오션뷰2",
        price : 3000000,
        rating : 6.9,
        imageUrl : `${img3}`
    }
]

function CardContainer(){
    return(
        <div className="card-container">
            {listings.map(listings =>(
                <card key={listings.id} {...listings}/>
            ))}
        </div>
    )
}
export default CardContainer